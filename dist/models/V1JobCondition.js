"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobCondition = void 0;
var V1JobCondition = (function () {
    function V1JobCondition() {
    }
    V1JobCondition.getAttributeTypeMap = function () {
        return V1JobCondition.attributeTypeMap;
    };
    V1JobCondition.discriminator = undefined;
    V1JobCondition.attributeTypeMap = [
        {
            "name": "lastProbeTime",
            "baseName": "lastProbeTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "K8sIoApiCoreV1ConditionStatus",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V1JobConditionType",
            "format": ""
        }
    ];
    return V1JobCondition;
}());
exports.V1JobCondition = V1JobCondition;
//# sourceMappingURL=V1JobCondition.js.map