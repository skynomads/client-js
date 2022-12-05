"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ContainerResources = void 0;
var V1ContainerResources = (function () {
    function V1ContainerResources() {
    }
    V1ContainerResources.getAttributeTypeMap = function () {
        return V1ContainerResources.attributeTypeMap;
    };
    V1ContainerResources.discriminator = undefined;
    V1ContainerResources.attributeTypeMap = [
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
    return V1ContainerResources;
}());
exports.V1ContainerResources = V1ContainerResources;
//# sourceMappingURL=V1ContainerResources.js.map