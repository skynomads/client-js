"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodAntiAffinity = void 0;
var V1PodAntiAffinity = (function () {
    function V1PodAntiAffinity() {
    }
    V1PodAntiAffinity.getAttributeTypeMap = function () {
        return V1PodAntiAffinity.attributeTypeMap;
    };
    V1PodAntiAffinity.discriminator = undefined;
    V1PodAntiAffinity.attributeTypeMap = [
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
    return V1PodAntiAffinity;
}());
exports.V1PodAntiAffinity = V1PodAntiAffinity;
//# sourceMappingURL=V1PodAntiAffinity.js.map