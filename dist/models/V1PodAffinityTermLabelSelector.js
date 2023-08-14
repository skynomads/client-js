"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodAffinityTermLabelSelector = void 0;
var V1PodAffinityTermLabelSelector = (function () {
    function V1PodAffinityTermLabelSelector() {
    }
    V1PodAffinityTermLabelSelector.getAttributeTypeMap = function () {
        return V1PodAffinityTermLabelSelector.attributeTypeMap;
    };
    V1PodAffinityTermLabelSelector.discriminator = undefined;
    V1PodAffinityTermLabelSelector.attributeTypeMap = [
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
    return V1PodAffinityTermLabelSelector;
}());
exports.V1PodAffinityTermLabelSelector = V1PodAffinityTermLabelSelector;
//# sourceMappingURL=V1PodAffinityTermLabelSelector.js.map