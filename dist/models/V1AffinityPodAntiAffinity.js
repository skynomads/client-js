"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1AffinityPodAntiAffinity = void 0;
var V1AffinityPodAntiAffinity = (function () {
    function V1AffinityPodAntiAffinity() {
    }
    V1AffinityPodAntiAffinity.getAttributeTypeMap = function () {
        return V1AffinityPodAntiAffinity.attributeTypeMap;
    };
    V1AffinityPodAntiAffinity.discriminator = undefined;
    V1AffinityPodAntiAffinity.attributeTypeMap = [
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
    return V1AffinityPodAntiAffinity;
}());
exports.V1AffinityPodAntiAffinity = V1AffinityPodAntiAffinity;
//# sourceMappingURL=V1AffinityPodAntiAffinity.js.map