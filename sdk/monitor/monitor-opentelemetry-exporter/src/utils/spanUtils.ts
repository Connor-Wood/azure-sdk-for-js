// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { URL } from "url";
import { ReadableSpan } from "@opentelemetry/tracing";
import { hrTimeToMilliseconds } from "@opentelemetry/core";
import { SpanKind, Logger, CanonicalCode, Link } from "@opentelemetry/api";
import { Envelope, Base } from "../Declarations/Contracts";
import { Tags, Properties, MSLink, Measurements } from "../types";
import {
  HTTP_METHOD,
  HTTP_ROUTE,
  HTTP_URL,
  HTTP_STATUS_CODE
} from "./constants/span/httpAttributes";
import {
  AI_OPERATION_ID,
  AI_OPERATION_PARENT_ID,
  AI_OPERATION_NAME,
  MS_LINKS,
  INPROC
} from "./constants/applicationinsights";
import {
  GRPC_ERROR_MESSAGE,
  GRPC_ERROR_NAME,
  GRPC_METHOD,
  GRPC_STATUS_CODE
} from "./constants/span/grpcAttributes";
import { msToTimeSpan } from "./breezeUtils";
import { getInstance } from "../platform";
import { DB_STATEMENT, DB_TYPE, DB_INSTANCE } from "./constants/span/dbAttributes";
import { parseEventHubSpan } from "./eventhub";
import { AzNamespace, MicrosoftEventHub } from "./constants/span/azAttributes";
import { RemoteDependencyData, RequestData } from "../generated";

function createTagsFromSpan(span: ReadableSpan): Tags {
  const context = getInstance();
  const tags: Tags = { ...context.tags };
  tags[AI_OPERATION_ID] = span.spanContext.traceId;
  if (span.parentSpanId) {
    tags[AI_OPERATION_PARENT_ID] = span.parentSpanId;
  }
  // @todo: is this for RequestData only?
  if (
    (span.kind === SpanKind.SERVER || span.kind === SpanKind.CONSUMER) &&
    span.attributes[GRPC_METHOD]
  ) {
    tags[AI_OPERATION_NAME] = String(span.attributes[GRPC_METHOD]);
  }
  if (
    (span.kind === SpanKind.SERVER || span.kind === SpanKind.CONSUMER) &&
    span.attributes[HTTP_METHOD] &&
    span.attributes[HTTP_ROUTE]
  ) {
    tags[AI_OPERATION_NAME] = `${span.attributes[HTTP_METHOD] as string} ${span.attributes[
      HTTP_ROUTE
    ] as string}`;
  }
  return tags;
}

function createPropertiesFromSpan(span: ReadableSpan): [Properties, Measurements] {
  const properties: Properties = {};
  const measurements: Measurements = {};

  for (const key of Object.keys(span.attributes)) {
    if (
      key === GRPC_ERROR_MESSAGE ||
      key === GRPC_ERROR_NAME ||
      !(key.startsWith("http.") || key.startsWith("grpc.") || key.startsWith("db."))
    ) {
      properties[key] = span.attributes[key] as string;
    }
  }

  const links: MSLink[] = span.links.map((link: Link) => ({
    operation_Id: link.context.traceId,
    id: link.context.spanId
  }));

  if (links.length > 0) {
    properties[MS_LINKS] = JSON.stringify(links);
  }

  return [properties, measurements];
}

function createDependencyData(span: ReadableSpan): RemoteDependencyData {
  const data: RemoteDependencyData = {
    name: span.name,
    id: `|${span.spanContext.traceId}.${span.spanContext.spanId}.`,
    success: span.status.code === CanonicalCode.OK,
    resultCode: String(span.status.code),
    target: span.attributes[HTTP_URL] as string | undefined,
    type: "Dependency",
    duration: msToTimeSpan(hrTimeToMilliseconds(span.duration)),
    version: 1
  };

  if (span.attributes[HTTP_STATUS_CODE]) {
    data.type = "HTTP";
    data.resultCode = String(span.attributes[HTTP_STATUS_CODE]);
  }

  if (span.attributes[GRPC_STATUS_CODE] !== undefined) {
    data.type = "GRPC";
    data.resultCode = String(span.attributes[GRPC_STATUS_CODE]);
  }

  if (span.attributes[GRPC_METHOD]) {
    data.target = String(span.attributes[GRPC_METHOD]);
    data.data = String(span.attributes[GRPC_METHOD]);
  }

  if (span.attributes[HTTP_URL]) {
    const url = new URL(span.attributes[HTTP_URL] as string);
    data.target = url.hostname;
    data.data = url.href;

    if (span.attributes[HTTP_METHOD]) {
      data.name = `${span.attributes[HTTP_METHOD] as string} ${url.pathname}`;
    }
  }

  if (span.attributes[DB_STATEMENT]) {
    data.name = String(span.attributes[DB_STATEMENT]);
    data.data = String(span.attributes[DB_STATEMENT]);
    if (span.attributes[DB_TYPE]) {
      data.type = String(span.attributes[DB_TYPE]);
    } else {
      data.type = "DB";
    }

    if (span.attributes[DB_INSTANCE]) {
      data.target = String(span.attributes[DB_INSTANCE]);
    }
  }

  return data;
}

function createRequestData(span: ReadableSpan): RequestData {
  const data: RequestData = {
    name: span.name,
    id: `|${span.spanContext.traceId}.${span.spanContext.spanId}.`,
    success: span.status.code === CanonicalCode.OK,
    responseCode: String(span.status.code),
    duration: msToTimeSpan(hrTimeToMilliseconds(span.duration)),
    version: 1,
    source: undefined
  };

  if (span.attributes[HTTP_METHOD]) {
    data.name = span.attributes[HTTP_METHOD] as string;

    if (span.attributes[HTTP_STATUS_CODE]) {
      data.responseCode = String(span.attributes[HTTP_STATUS_CODE]);
    }

    if (span.attributes[HTTP_URL]) {
      data.url = span.attributes[HTTP_URL] as string;
    }

    if (span.attributes[HTTP_ROUTE]) {
      data.name = `${span.attributes[HTTP_METHOD] as string} ${span.attributes[
        HTTP_ROUTE
      ] as string}`;
    } else if (span.attributes[HTTP_URL]) {
      const url = new URL(span.attributes[HTTP_URL] as string);
      data.name = `${span.attributes[HTTP_METHOD] as string} ${url.pathname}`;
    }
  }

  if (span.attributes[GRPC_STATUS_CODE]) {
    data.responseCode = String(span.attributes[GRPC_STATUS_CODE]);
  }
  if (span.attributes[GRPC_METHOD]) {
    data.url = String(span.attributes[GRPC_METHOD]);
  }

  return data;
}

function createInProcData(span: ReadableSpan): RemoteDependencyData {
  const data = createDependencyData(span);
  data.type = INPROC;
  data.success = true;
  return data;
}

export function readableSpanToEnvelope(
  span: ReadableSpan,
  instrumentationKey: string,
  logger?: Logger
): Envelope {
  const envelope = new Envelope();
  envelope.data = new Base();
  const tags = createTagsFromSpan(span);
  const [properties, measurements] = createPropertiesFromSpan(span);
  let data;
  switch (span.kind) {
    case SpanKind.CLIENT:
    case SpanKind.PRODUCER:
      envelope.name = "Microsoft.ApplicationInsights.RemoteDependency";
      envelope.data.baseType = "RemoteDependencyData";
      data = createDependencyData(span);
      break;
    case SpanKind.SERVER:
    case SpanKind.CONSUMER:
      envelope.name = "Microsoft.ApplicationInsights.Request";
      envelope.data.baseType = "RequestData";
      data = createRequestData(span);
      break;
    case SpanKind.INTERNAL:
      envelope.data.baseType = "RemoteDependencyData";
      envelope.name = "Microsoft.ApplicationInsights.RemoteDependency";
      data = createInProcData(span);
      break;
    default:
      // never
      if (logger) {
        logger.error(`Unsupported span kind ${span.kind}`);
      }
      throw new Error(`Unsupported span kind ${span.kind}`);
  }

  envelope.data.baseData = { ...data, properties, measurements };
  envelope.tags = tags;
  envelope.time = new Date(hrTimeToMilliseconds(span.startTime)).toISOString();
  envelope.iKey = instrumentationKey;
  envelope.ver = 1;

  if (span.attributes[AzNamespace] === MicrosoftEventHub) {
    parseEventHubSpan(span, envelope);
  } else if (span.attributes[AzNamespace]) {
    switch (span.kind) {
      case SpanKind.INTERNAL:
        envelope.data.baseData.type = `${INPROC} | ${span.attributes[AzNamespace]}`;
        break;
      default: // no op
    }
  }

  return envelope;
}