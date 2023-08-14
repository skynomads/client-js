"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ContainerLifecycle = void 0;
var V1ContainerLifecycle = (function () {
    function V1ContainerLifecycle() {
    }
    V1ContainerLifecycle.getAttributeTypeMap = function () {
        return V1ContainerLifecycle.attributeTypeMap;
    };
    V1ContainerLifecycle.discriminator = undefined;
    V1ContainerLifecycle.attributeTypeMap = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "V1LifecyclePostStart",
            "format": ""
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "V1LifecyclePreStop",
            "format": ""
        }
    ];
    return V1ContainerLifecycle;
}());
exports.V1ContainerLifecycle = V1ContainerLifecycle;
//# sourceMappingURL=V1ContainerLifecycle.js.map