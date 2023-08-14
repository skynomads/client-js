"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodFailurePolicyRuleOnExitCodes = void 0;
var V1PodFailurePolicyRuleOnExitCodes = (function () {
    function V1PodFailurePolicyRuleOnExitCodes() {
    }
    V1PodFailurePolicyRuleOnExitCodes.getAttributeTypeMap = function () {
        return V1PodFailurePolicyRuleOnExitCodes.attributeTypeMap;
    };
    V1PodFailurePolicyRuleOnExitCodes.discriminator = undefined;
    V1PodFailurePolicyRuleOnExitCodes.attributeTypeMap = [
        {
            "name": "containerName",
            "baseName": "containerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "V1PodFailurePolicyOnExitCodesOperator",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return V1PodFailurePolicyRuleOnExitCodes;
}());
exports.V1PodFailurePolicyRuleOnExitCodes = V1PodFailurePolicyRuleOnExitCodes;
//# sourceMappingURL=V1PodFailurePolicyRuleOnExitCodes.js.map