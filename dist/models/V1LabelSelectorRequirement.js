"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LabelSelectorRequirement = void 0;
var V1LabelSelectorRequirement = (function () {
    function V1LabelSelectorRequirement() {
    }
    V1LabelSelectorRequirement.getAttributeTypeMap = function () {
        return V1LabelSelectorRequirement.attributeTypeMap;
    };
    V1LabelSelectorRequirement.discriminator = undefined;
    V1LabelSelectorRequirement.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "V1LabelSelectorOperator",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1LabelSelectorRequirement;
}());
exports.V1LabelSelectorRequirement = V1LabelSelectorRequirement;
//# sourceMappingURL=V1LabelSelectorRequirement.js.map