"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EphemeralContainerResources = void 0;
var V1EphemeralContainerResources = (function () {
    function V1EphemeralContainerResources() {
    }
    V1EphemeralContainerResources.getAttributeTypeMap = function () {
        return V1EphemeralContainerResources.attributeTypeMap;
    };
    V1EphemeralContainerResources.discriminator = undefined;
    V1EphemeralContainerResources.attributeTypeMap = [
        {
            "name": "claims",
            "baseName": "claims",
            "type": "Array<V1ResourceClaim>",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        }
    ];
    return V1EphemeralContainerResources;
}());
exports.V1EphemeralContainerResources = V1EphemeralContainerResources;
//# sourceMappingURL=V1EphemeralContainerResources.js.map