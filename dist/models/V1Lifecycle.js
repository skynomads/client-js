"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Lifecycle = void 0;
var V1Lifecycle = (function () {
    function V1Lifecycle() {
    }
    V1Lifecycle.getAttributeTypeMap = function () {
        return V1Lifecycle.attributeTypeMap;
    };
    V1Lifecycle.discriminator = undefined;
    V1Lifecycle.attributeTypeMap = [
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
    return V1Lifecycle;
}());
exports.V1Lifecycle = V1Lifecycle;
//# sourceMappingURL=V1Lifecycle.js.map