"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodAffinityTerm = void 0;
var V1PodAffinityTerm = (function () {
    function V1PodAffinityTerm() {
    }
    V1PodAffinityTerm.getAttributeTypeMap = function () {
        return V1PodAffinityTerm.attributeTypeMap;
    };
    V1PodAffinityTerm.discriminator = undefined;
    V1PodAffinityTerm.attributeTypeMap = [
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
    return V1PodAffinityTerm;
}());
exports.V1PodAffinityTerm = V1PodAffinityTerm;
//# sourceMappingURL=V1PodAffinityTerm.js.map