"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobSpec = void 0;
var V1JobSpec = (function () {
    function V1JobSpec() {
    }
    V1JobSpec.getAttributeTypeMap = function () {
        return V1JobSpec.attributeTypeMap;
    };
    V1JobSpec.discriminator = undefined;
    V1JobSpec.attributeTypeMap = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "backoffLimit",
            "baseName": "backoffLimit",
            "type": "number",
            "format": ""
        },
        {
            "name": "completionMode",
            "baseName": "completionMode",
            "type": "V1CompletionMode",
            "format": ""
        },
        {
            "name": "completions",
            "baseName": "completions",
            "type": "number",
            "format": ""
        },
        {
            "name": "manualSelector",
            "baseName": "manualSelector",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parallelism",
            "baseName": "parallelism",
            "type": "number",
            "format": ""
        },
        {
            "name": "podFailurePolicy",
            "baseName": "podFailurePolicy",
            "type": "V1JobSpecPodFailurePolicy",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1JobSpecSelector",
            "format": ""
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1JobSpecTemplate",
            "format": ""
        },
        {
            "name": "ttlSecondsAfterFinished",
            "baseName": "ttlSecondsAfterFinished",
            "type": "number",
            "format": ""
        }
    ];
    return V1JobSpec;
}());
exports.V1JobSpec = V1JobSpec;
//# sourceMappingURL=V1JobSpec.js.map