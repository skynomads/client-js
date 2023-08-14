"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ContainerResizePolicy = void 0;
var V1ContainerResizePolicy = (function () {
    function V1ContainerResizePolicy() {
    }
    V1ContainerResizePolicy.getAttributeTypeMap = function () {
        return V1ContainerResizePolicy.attributeTypeMap;
    };
    V1ContainerResizePolicy.discriminator = undefined;
    V1ContainerResizePolicy.attributeTypeMap = [
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "V1ResourceName",
            "format": ""
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "V1ResourceResizeRestartPolicy",
            "format": ""
        }
    ];
    return V1ContainerResizePolicy;
}());
exports.V1ContainerResizePolicy = V1ContainerResizePolicy;
//# sourceMappingURL=V1ContainerResizePolicy.js.map