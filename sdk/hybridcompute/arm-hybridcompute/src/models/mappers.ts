/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationValue: msRest.CompositeMapper = {
  serializedName: "OperationValue",
  type: {
    name: "Composite",
    className: "OperationValue",
    modelProperties: {
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "display.operation",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "display.resource",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "display.description",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "display.provider",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationValueDisplayModel: msRest.CompositeMapper = {
  serializedName: "OperationValueDisplay",
  type: {
    name: "Composite",
    className: "OperationValueDisplayModel",
    modelProperties: {
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OSProfile: msRest.CompositeMapper = {
  serializedName: "OSProfile",
  type: {
    name: "Composite",
    className: "OSProfile",
    modelProperties: {
      computerName: {
        readOnly: true,
        serializedName: "computerName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationData: msRest.CompositeMapper = {
  serializedName: "locationData",
  type: {
    name: "Composite",
    className: "LocationData",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        constraints: {
          MaxLength: 256
        },
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      countryOrRegion: {
        serializedName: "countryOrRegion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachinePropertiesOsProfile: msRest.CompositeMapper = {
  serializedName: "MachineProperties_osProfile",
  type: {
    name: "Composite",
    className: "MachinePropertiesOsProfile",
    modelProperties: {
      ...OSProfile.type.modelProperties
    }
  }
};

export const ErrorDetail: msRest.CompositeMapper = {
  serializedName: "ErrorDetail",
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const MachineExtensionInstanceViewStatus: msRest.CompositeMapper = {
  serializedName: "MachineExtensionInstanceView_status",
  type: {
    name: "Composite",
    className: "MachineExtensionInstanceViewStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      level: {
        serializedName: "level",
        type: {
          name: "String"
        }
      },
      displayStatus: {
        serializedName: "displayStatus",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      time: {
        serializedName: "time",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const MachineExtensionInstanceView: msRest.CompositeMapper = {
  serializedName: "MachineExtensionInstanceView",
  type: {
    name: "Composite",
    className: "MachineExtensionInstanceView",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "MachineExtensionInstanceViewStatus"
        }
      }
    }
  }
};

export const MachineProperties: msRest.CompositeMapper = {
  serializedName: "MachineProperties",
  type: {
    name: "Composite",
    className: "MachineProperties",
    modelProperties: {
      locationData: {
        serializedName: "locationData",
        type: {
          name: "Composite",
          className: "LocationData"
        }
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "MachinePropertiesOsProfile"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      lastStatusChange: {
        readOnly: true,
        serializedName: "lastStatusChange",
        type: {
          name: "DateTime"
        }
      },
      errorDetails: {
        readOnly: true,
        serializedName: "errorDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      agentVersion: {
        readOnly: true,
        serializedName: "agentVersion",
        type: {
          name: "String"
        }
      },
      vmId: {
        serializedName: "vmId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      machineFqdn: {
        readOnly: true,
        serializedName: "machineFqdn",
        type: {
          name: "String"
        }
      },
      clientPublicKey: {
        serializedName: "clientPublicKey",
        type: {
          name: "String"
        }
      },
      osName: {
        readOnly: true,
        serializedName: "osName",
        type: {
          name: "String"
        }
      },
      osVersion: {
        readOnly: true,
        serializedName: "osVersion",
        type: {
          name: "String"
        }
      },
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MachineExtensionInstanceView"
            }
          }
        }
      }
    }
  }
};

export const MachineReconnectProperties: msRest.CompositeMapper = {
  serializedName: "MachineReconnectProperties",
  type: {
    name: "Composite",
    className: "MachineReconnectProperties",
    modelProperties: {
      vmId: {
        serializedName: "vmId",
        type: {
          name: "String"
        }
      },
      clientPublicKey: {
        serializedName: "clientPublicKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineUpdateProperties: msRest.CompositeMapper = {
  serializedName: "MachineUpdateProperties",
  type: {
    name: "Composite",
    className: "MachineUpdateProperties",
    modelProperties: {
      locationData: {
        serializedName: "locationData",
        type: {
          name: "Composite",
          className: "LocationData"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned"
          ]
        }
      }
    }
  }
};

export const MachineIdentity: msRest.CompositeMapper = {
  serializedName: "Machine_identity",
  type: {
    name: "Composite",
    className: "MachineIdentity",
    modelProperties: {
      ...Identity.type.modelProperties
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Machine: msRest.CompositeMapper = {
  serializedName: "Machine",
  type: {
    name: "Composite",
    className: "Machine",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      locationData: {
        serializedName: "properties.locationData",
        type: {
          name: "Composite",
          className: "LocationData"
        }
      },
      osProfile: {
        serializedName: "properties.osProfile",
        type: {
          name: "Composite",
          className: "MachinePropertiesOsProfile"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      },
      lastStatusChange: {
        readOnly: true,
        serializedName: "properties.lastStatusChange",
        type: {
          name: "DateTime"
        }
      },
      errorDetails: {
        readOnly: true,
        serializedName: "properties.errorDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      agentVersion: {
        readOnly: true,
        serializedName: "properties.agentVersion",
        type: {
          name: "String"
        }
      },
      vmId: {
        serializedName: "properties.vmId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      machineFqdn: {
        readOnly: true,
        serializedName: "properties.machineFqdn",
        type: {
          name: "String"
        }
      },
      clientPublicKey: {
        serializedName: "properties.clientPublicKey",
        type: {
          name: "String"
        }
      },
      osName: {
        readOnly: true,
        serializedName: "properties.osName",
        type: {
          name: "String"
        }
      },
      osVersion: {
        readOnly: true,
        serializedName: "properties.osVersion",
        type: {
          name: "String"
        }
      },
      extensions: {
        serializedName: "properties.extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MachineExtensionInstanceView"
            }
          }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "MachineIdentity"
        }
      }
    }
  }
};

export const UpdateResource: msRest.CompositeMapper = {
  serializedName: "UpdateResource",
  type: {
    name: "Composite",
    className: "UpdateResource",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MachineUpdate: msRest.CompositeMapper = {
  serializedName: "MachineUpdate",
  type: {
    name: "Composite",
    className: "MachineUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      principalId: {
        readOnly: true,
        serializedName: "identity.principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "identity.tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "identity.type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned"
          ]
        }
      },
      locationData: {
        serializedName: "properties.locationData",
        type: {
          name: "Composite",
          className: "LocationData"
        }
      }
    }
  }
};

export const MachineReconnect: msRest.CompositeMapper = {
  serializedName: "MachineReconnect",
  type: {
    name: "Composite",
    className: "MachineReconnect",
    modelProperties: {
      vmId: {
        serializedName: "properties.vmId",
        type: {
          name: "String"
        }
      },
      clientPublicKey: {
        serializedName: "properties.clientPublicKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineExtension: msRest.CompositeMapper = {
  serializedName: "MachineExtension",
  type: {
    name: "Composite",
    className: "MachineExtension",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      machineExtensionType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "Object"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "Object"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "properties.instanceView",
        type: {
          name: "Composite",
          className: "MachineExtensionPropertiesInstanceView"
        }
      }
    }
  }
};

export const MachineExtensionUpdate: msRest.CompositeMapper = {
  serializedName: "MachineExtensionUpdate",
  type: {
    name: "Composite",
    className: "MachineExtensionUpdate",
    modelProperties: {
      ...UpdateResource.type.modelProperties,
      forceUpdateTag: {
        serializedName: "properties.forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "properties.typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "properties.autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "properties.settings",
        type: {
          name: "Object"
        }
      },
      protectedSettings: {
        serializedName: "properties.protectedSettings",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const MachineExtensionPropertiesInstanceView: msRest.CompositeMapper = {
  serializedName: "MachineExtensionProperties_instanceView",
  type: {
    name: "Composite",
    className: "MachineExtensionPropertiesInstanceView",
    modelProperties: {
      ...MachineExtensionInstanceView.type.modelProperties
    }
  }
};

export const MachineExtensionPropertiesModel: msRest.CompositeMapper = {
  serializedName: "MachineExtensionProperties",
  type: {
    name: "Composite",
    className: "MachineExtensionPropertiesModel",
    modelProperties: {
      forceUpdateTag: {
        serializedName: "forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "settings",
        type: {
          name: "Object"
        }
      },
      protectedSettings: {
        serializedName: "protectedSettings",
        type: {
          name: "Object"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "instanceView",
        type: {
          name: "Composite",
          className: "MachineExtensionPropertiesInstanceView"
        }
      }
    }
  }
};

export const MachineExtensionUpdatePropertiesModel: msRest.CompositeMapper = {
  serializedName: "MachineExtensionUpdateProperties",
  type: {
    name: "Composite",
    className: "MachineExtensionUpdatePropertiesModel",
    modelProperties: {
      forceUpdateTag: {
        serializedName: "forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "settings",
        type: {
          name: "Object"
        }
      },
      protectedSettings: {
        serializedName: "protectedSettings",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceModelWithAllowedPropertySetIdentity: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet_identity",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySetIdentity",
    modelProperties: {
      ...Identity.type.modelProperties
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Free",
            "Basic",
            "Standard",
            "Premium"
          ]
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResourceModelWithAllowedPropertySetSku: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet_sku",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySetSku",
    modelProperties: {
      ...Sku.type.modelProperties
    }
  }
};

export const Plan: msRest.CompositeMapper = {
  serializedName: "Plan",
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        required: true,
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        required: true,
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceModelWithAllowedPropertySetPlan: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet_plan",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySetPlan",
    modelProperties: {
      ...Plan.type.modelProperties
    }
  }
};

export const ResourceModelWithAllowedPropertySet: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySet",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        constraints: {
          Pattern: /^[-\w\._,\(\)]+$/
        },
        type: {
          name: "String"
        }
      },
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceModelWithAllowedPropertySetIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceModelWithAllowedPropertySetSku"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "ResourceModelWithAllowedPropertySetPlan"
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: msRest.CompositeMapper = {
  serializedName: "ErrorAdditionalInfo",
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      info: {
        readOnly: true,
        serializedName: "info",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        readOnly: true,
        serializedName: "additionalInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const MachineListResult: msRest.CompositeMapper = {
  serializedName: "MachineListResult",
  type: {
    name: "Composite",
    className: "MachineListResult",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Machine"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineExtensionsListResult: msRest.CompositeMapper = {
  serializedName: "MachineExtensionsListResult",
  type: {
    name: "Composite",
    className: "MachineExtensionsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MachineExtension"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationValue"
            }
          }
        }
      }
    }
  }
};