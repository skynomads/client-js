"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1NodeSelectorRequirement = void 0;
var V1NodeSelectorRequirement = (function () {
    function V1NodeSelectorRequirement() {
    }
    V1NodeSelectorRequirement.getAttributeTypeMap = function () {
        return V1NodeSelectorRequirement.attributeTypeMap;
    };
    V1NodeSelectorRequirement.discriminator = undefined;
    V1NodeSelectorRequirement.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "V1NodeSelectorOperator",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1NodeSelectorRequirement;
}());
exports.V1NodeSelectorRequirement = V1NodeSelectorRequirement;
//# sourceMappingURL=V1NodeSelectorRequirement.js.map