"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodAffinityTermNamespaceSelector = void 0;
var V1PodAffinityTermNamespaceSelector = (function () {
    function V1PodAffinityTermNamespaceSelector() {
    }
    V1PodAffinityTermNamespaceSelector.getAttributeTypeMap = function () {
        return V1PodAffinityTermNamespaceSelector.attributeTypeMap;
    };
    V1PodAffinityTermNamespaceSelector.discriminator = undefined;
    V1PodAffinityTermNamespaceSelector.attributeTypeMap = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1LabelSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchLabels",
            "baseName": "matchLabels",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return V1PodAffinityTermNamespaceSelector;
}());
exports.V1PodAffinityTermNamespaceSelector = V1PodAffinityTermNamespaceSelector;
//# sourceMappingURL=V1PodAffinityTermNamespaceSelector.js.map