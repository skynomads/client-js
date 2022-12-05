"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EphemeralContainerLifecycle = void 0;
var V1EphemeralContainerLifecycle = (function () {
    function V1EphemeralContainerLifecycle() {
    }
    V1EphemeralContainerLifecycle.getAttributeTypeMap = function () {
        return V1EphemeralContainerLifecycle.attributeTypeMap;
    };
    V1EphemeralContainerLifecycle.discriminator = undefined;
    V1EphemeralContainerLifecycle.attributeTypeMap = [
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
    return V1EphemeralContainerLifecycle;
}());
exports.V1EphemeralContainerLifecycle = V1EphemeralContainerLifecycle;
//# sourceMappingURL=V1EphemeralContainerLifecycle.js.map