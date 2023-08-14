"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1AffinityPodAffinity = void 0;
var V1AffinityPodAffinity = (function () {
    function V1AffinityPodAffinity() {
    }
    V1AffinityPodAffinity.getAttributeTypeMap = function () {
        return V1AffinityPodAffinity.attributeTypeMap;
    };
    V1AffinityPodAffinity.discriminator = undefined;
    V1AffinityPodAffinity.attributeTypeMap = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<V1WeightedPodAffinityTerm>",
            "format": ""
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<V1PodAffinityTerm>",
            "format": ""
        }
    ];
    return V1AffinityPodAffinity;
}());
exports.V1AffinityPodAffinity = V1AffinityPodAffinity;
//# sourceMappingURL=V1AffinityPodAffinity.js.map