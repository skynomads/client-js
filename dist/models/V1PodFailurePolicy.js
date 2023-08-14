"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodFailurePolicy = void 0;
var V1PodFailurePolicy = (function () {
    function V1PodFailurePolicy() {
    }
    V1PodFailurePolicy.getAttributeTypeMap = function () {
        return V1PodFailurePolicy.attributeTypeMap;
    };
    V1PodFailurePolicy.discriminator = undefined;
    V1PodFailurePolicy.attributeTypeMap = [
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1PodFailurePolicyRule>",
            "format": ""
        }
    ];
    return V1PodFailurePolicy;
}());
exports.V1PodFailurePolicy = V1PodFailurePolicy;
//# sourceMappingURL=V1PodFailurePolicy.js.map