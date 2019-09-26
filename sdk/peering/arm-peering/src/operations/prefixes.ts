/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/prefixesMappers";
import * as Parameters from "../models/parameters";
import { PeeringManagementClientContext } from "../peeringManagementClientContext";

/** Class representing a Prefixes. */
export class Prefixes {
  private readonly client: PeeringManagementClientContext;

  /**
   * Create a Prefixes.
   * @param {PeeringManagementClientContext} client Reference to the service client.
   */
  constructor(client: PeeringManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the peerings prefix in the resource group.
   * @param resourceGroupName The resource group name.
   * @param peeringServiceName The peering service name.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrefixesListByPeeringServiceResponse>
   */
  listByPeeringService(resourceGroupName: string, peeringServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrefixesListByPeeringServiceResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param peeringServiceName The peering service name.
   * @param callback The callback
   */
  listByPeeringService(resourceGroupName: string, peeringServiceName: string, callback: msRest.ServiceCallback<Models.PeeringServicePrefixListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param peeringServiceName The peering service name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPeeringService(resourceGroupName: string, peeringServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringServicePrefixListResult>): void;
  listByPeeringService(resourceGroupName: string, peeringServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringServicePrefixListResult>, callback?: msRest.ServiceCallback<Models.PeeringServicePrefixListResult>): Promise<Models.PrefixesListByPeeringServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        peeringServiceName,
        options
      },
      listByPeeringServiceOperationSpec,
      callback) as Promise<Models.PrefixesListByPeeringServiceResponse>;
  }

  /**
   * Lists the peerings prefix in the resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrefixesListByPeeringServiceNextResponse>
   */
  listByPeeringServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrefixesListByPeeringServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByPeeringServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PeeringServicePrefixListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPeeringServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringServicePrefixListResult>): void;
  listByPeeringServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringServicePrefixListResult>, callback?: msRest.ServiceCallback<Models.PeeringServicePrefixListResult>): Promise<Models.PrefixesListByPeeringServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByPeeringServiceNextOperationSpec,
      callback) as Promise<Models.PrefixesListByPeeringServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByPeeringServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.peeringServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServicePrefixListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByPeeringServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServicePrefixListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};