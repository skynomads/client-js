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
            "name": "limits",
            "baseName": "limits",
            "type": "any",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "any",
            "format": ""
        }
    ];
    return V1EphemeralContainerResources;
}());
exports.V1EphemeralContainerResources = V1EphemeralContainerResources;
//# sourceMappingURL=V1EphemeralContainerResources.js.map