"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodAffinity = void 0;
var V1PodAffinity = (function () {
    function V1PodAffinity() {
    }
    V1PodAffinity.getAttributeTypeMap = function () {
        return V1PodAffinity.attributeTypeMap;
    };
    V1PodAffinity.discriminator = undefined;
    V1PodAffinity.attributeTypeMap = [
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
    return V1PodAffinity;
}());
exports.V1PodAffinity = V1PodAffinity;
//# sourceMappingURL=V1PodAffinity.js.map