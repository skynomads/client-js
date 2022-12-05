"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobSpecPodFailurePolicy = void 0;
var V1JobSpecPodFailurePolicy = (function () {
    function V1JobSpecPodFailurePolicy() {
    }
    V1JobSpecPodFailurePolicy.getAttributeTypeMap = function () {
        return V1JobSpecPodFailurePolicy.attributeTypeMap;
    };
    V1JobSpecPodFailurePolicy.discriminator = undefined;
    V1JobSpecPodFailurePolicy.attributeTypeMap = [
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1PodFailurePolicyRule>",
            "format": ""
        }
    ];
    return V1JobSpecPodFailurePolicy;
}());
exports.V1JobSpecPodFailurePolicy = V1JobSpecPodFailurePolicy;
//# sourceMappingURL=V1JobSpecPodFailurePolicy.js.map