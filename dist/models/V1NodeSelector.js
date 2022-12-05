"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1NodeSelector = void 0;
var V1NodeSelector = (function () {
    function V1NodeSelector() {
    }
    V1NodeSelector.getAttributeTypeMap = function () {
        return V1NodeSelector.attributeTypeMap;
    };
    V1NodeSelector.discriminator = undefined;
    V1NodeSelector.attributeTypeMap = [
        {
            "name": "nodeSelectorTerms",
            "baseName": "nodeSelectorTerms",
            "type": "Array<V1NodeSelectorTerm>",
            "format": ""
        }
    ];
    return V1NodeSelector;
}());
exports.V1NodeSelector = V1NodeSelector;
//# sourceMappingURL=V1NodeSelector.js.map