"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodFailurePolicyOnExitCodesRequirement = void 0;
var V1PodFailurePolicyOnExitCodesRequirement = (function () {
    function V1PodFailurePolicyOnExitCodesRequirement() {
    }
    V1PodFailurePolicyOnExitCodesRequirement.getAttributeTypeMap = function () {
        return V1PodFailurePolicyOnExitCodesRequirement.attributeTypeMap;
    };
    V1PodFailurePolicyOnExitCodesRequirement.discriminator = undefined;
    V1PodFailurePolicyOnExitCodesRequirement.attributeTypeMap = [
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
    return V1PodFailurePolicyOnExitCodesRequirement;
}());
exports.V1PodFailurePolicyOnExitCodesRequirement = V1PodFailurePolicyOnExitCodesRequirement;
//# sourceMappingURL=V1PodFailurePolicyOnExitCodesRequirement.js.map