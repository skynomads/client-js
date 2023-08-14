"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1NodeSelectorTerm = void 0;
var V1NodeSelectorTerm = (function () {
    function V1NodeSelectorTerm() {
    }
    V1NodeSelectorTerm.getAttributeTypeMap = function () {
        return V1NodeSelectorTerm.attributeTypeMap;
    };
    V1NodeSelectorTerm.discriminator = undefined;
    V1NodeSelectorTerm.attributeTypeMap = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        }
    ];
    return V1NodeSelectorTerm;
}());
exports.V1NodeSelectorTerm = V1NodeSelectorTerm;
//# sourceMappingURL=V1NodeSelectorTerm.js.map