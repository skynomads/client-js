"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1WeightedPodAffinityTermPodAffinityTerm = void 0;
var V1WeightedPodAffinityTermPodAffinityTerm = (function () {
    function V1WeightedPodAffinityTermPodAffinityTerm() {
    }
    V1WeightedPodAffinityTermPodAffinityTerm.getAttributeTypeMap = function () {
        return V1WeightedPodAffinityTermPodAffinityTerm.attributeTypeMap;
    };
    V1WeightedPodAffinityTermPodAffinityTerm.discriminator = undefined;
    V1WeightedPodAffinityTermPodAffinityTerm.attributeTypeMap = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "V1PodAffinityTermLabelSelector",
            "format": ""
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1PodAffinityTermNamespaceSelector",
            "format": ""
        },
        {
            "name": "namespaces",
            "baseName": "namespaces",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "topologyKey",
            "baseName": "topologyKey",
            "type": "string",
            "format": ""
        }
    ];
    return V1WeightedPodAffinityTermPodAffinityTerm;
}());
exports.V1WeightedPodAffinityTermPodAffinityTerm = V1WeightedPodAffinityTermPodAffinityTerm;
//# sourceMappingURL=V1WeightedPodAffinityTermPodAffinityTerm.js.map