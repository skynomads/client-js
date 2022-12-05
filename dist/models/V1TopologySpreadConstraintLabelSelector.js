"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TopologySpreadConstraintLabelSelector = void 0;
var V1TopologySpreadConstraintLabelSelector = (function () {
    function V1TopologySpreadConstraintLabelSelector() {
    }
    V1TopologySpreadConstraintLabelSelector.getAttributeTypeMap = function () {
        return V1TopologySpreadConstraintLabelSelector.attributeTypeMap;
    };
    V1TopologySpreadConstraintLabelSelector.discriminator = undefined;
    V1TopologySpreadConstraintLabelSelector.attributeTypeMap = [
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
    return V1TopologySpreadConstraintLabelSelector;
}());
exports.V1TopologySpreadConstraintLabelSelector = V1TopologySpreadConstraintLabelSelector;
//# sourceMappingURL=V1TopologySpreadConstraintLabelSelector.js.map