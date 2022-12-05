"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Condition = void 0;
var V1Condition = (function () {
    function V1Condition() {
    }
    V1Condition.getAttributeTypeMap = function () {
        return V1Condition.attributeTypeMap;
    };
    V1Condition.discriminator = undefined;
    V1Condition.attributeTypeMap = [
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
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
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
            "type": "K8sIoApimachineryPkgApisMetaV1ConditionStatus",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return V1Condition;
}());
exports.V1Condition = V1Condition;
//# sourceMappingURL=V1Condition.js.map