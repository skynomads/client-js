"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ConfigMapKeySelector = void 0;
var V1ConfigMapKeySelector = (function () {
    function V1ConfigMapKeySelector() {
    }
    V1ConfigMapKeySelector.getAttributeTypeMap = function () {
        return V1ConfigMapKeySelector.attributeTypeMap;
    };
    V1ConfigMapKeySelector.discriminator = undefined;
    V1ConfigMapKeySelector.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1ConfigMapKeySelector;
}());
exports.V1ConfigMapKeySelector = V1ConfigMapKeySelector;
//# sourceMappingURL=V1ConfigMapKeySelector.js.map