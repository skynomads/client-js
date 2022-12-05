"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LabelSelector = void 0;
var V1LabelSelector = (function () {
    function V1LabelSelector() {
    }
    V1LabelSelector.getAttributeTypeMap = function () {
        return V1LabelSelector.attributeTypeMap;
    };
    V1LabelSelector.discriminator = undefined;
    V1LabelSelector.attributeTypeMap = [
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
    return V1LabelSelector;
}());
exports.V1LabelSelector = V1LabelSelector;
//# sourceMappingURL=V1LabelSelector.js.map