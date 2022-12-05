"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobSpecSelector = void 0;
var V1JobSpecSelector = (function () {
    function V1JobSpecSelector() {
    }
    V1JobSpecSelector.getAttributeTypeMap = function () {
        return V1JobSpecSelector.attributeTypeMap;
    };
    V1JobSpecSelector.discriminator = undefined;
    V1JobSpecSelector.attributeTypeMap = [
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
    return V1JobSpecSelector;
}());
exports.V1JobSpecSelector = V1JobSpecSelector;
//# sourceMappingURL=V1JobSpecSelector.js.map