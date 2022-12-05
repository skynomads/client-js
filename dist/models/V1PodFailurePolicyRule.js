"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodFailurePolicyRule = void 0;
var V1PodFailurePolicyRule = (function () {
    function V1PodFailurePolicyRule() {
    }
    V1PodFailurePolicyRule.getAttributeTypeMap = function () {
        return V1PodFailurePolicyRule.attributeTypeMap;
    };
    V1PodFailurePolicyRule.discriminator = undefined;
    V1PodFailurePolicyRule.attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "V1PodFailurePolicyAction",
            "format": ""
        },
        {
            "name": "onExitCodes",
            "baseName": "onExitCodes",
            "type": "V1PodFailurePolicyRuleOnExitCodes",
            "format": ""
        },
        {
            "name": "onPodConditions",
            "baseName": "onPodConditions",
            "type": "Array<V1PodFailurePolicyOnPodConditionsPattern>",
            "format": ""
        }
    ];
    return V1PodFailurePolicyRule;
}());
exports.V1PodFailurePolicyRule = V1PodFailurePolicyRule;
//# sourceMappingURL=V1PodFailurePolicyRule.js.map