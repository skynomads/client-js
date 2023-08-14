"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1WeightedPodAffinityTerm = void 0;
var V1WeightedPodAffinityTerm = (function () {
    function V1WeightedPodAffinityTerm() {
    }
    V1WeightedPodAffinityTerm.getAttributeTypeMap = function () {
        return V1WeightedPodAffinityTerm.attributeTypeMap;
    };
    V1WeightedPodAffinityTerm.discriminator = undefined;
    V1WeightedPodAffinityTerm.attributeTypeMap = [
        {
            "name": "podAffinityTerm",
            "baseName": "podAffinityTerm",
            "type": "V1WeightedPodAffinityTermPodAffinityTerm",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        }
    ];
    return V1WeightedPodAffinityTerm;
}());
exports.V1WeightedPodAffinityTerm = V1WeightedPodAffinityTerm;
//# sourceMappingURL=V1WeightedPodAffinityTerm.js.map