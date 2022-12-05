"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodReadinessGate = void 0;
var V1PodReadinessGate = (function () {
    function V1PodReadinessGate() {
    }
    V1PodReadinessGate.getAttributeTypeMap = function () {
        return V1PodReadinessGate.attributeTypeMap;
    };
    V1PodReadinessGate.discriminator = undefined;
    V1PodReadinessGate.attributeTypeMap = [
        {
            "name": "conditionType",
            "baseName": "conditionType",
            "type": "V1PodConditionType",
            "format": ""
        }
    ];
    return V1PodReadinessGate;
}());
exports.V1PodReadinessGate = V1PodReadinessGate;
//# sourceMappingURL=V1PodReadinessGate.js.map