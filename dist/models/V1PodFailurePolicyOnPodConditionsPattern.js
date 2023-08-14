"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodFailurePolicyOnPodConditionsPattern = void 0;
var V1PodFailurePolicyOnPodConditionsPattern = (function () {
    function V1PodFailurePolicyOnPodConditionsPattern() {
    }
    V1PodFailurePolicyOnPodConditionsPattern.getAttributeTypeMap = function () {
        return V1PodFailurePolicyOnPodConditionsPattern.attributeTypeMap;
    };
    V1PodFailurePolicyOnPodConditionsPattern.discriminator = undefined;
    V1PodFailurePolicyOnPodConditionsPattern.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "K8sIoApiCoreV1ConditionStatus",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V1PodConditionType",
            "format": ""
        }
    ];
    return V1PodFailurePolicyOnPodConditionsPattern;
}());
exports.V1PodFailurePolicyOnPodConditionsPattern = V1PodFailurePolicyOnPodConditionsPattern;
//# sourceMappingURL=V1PodFailurePolicyOnPodConditionsPattern.js.map