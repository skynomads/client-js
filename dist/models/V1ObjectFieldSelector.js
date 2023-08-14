"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ObjectFieldSelector = void 0;
var V1ObjectFieldSelector = (function () {
    function V1ObjectFieldSelector() {
    }
    V1ObjectFieldSelector.getAttributeTypeMap = function () {
        return V1ObjectFieldSelector.attributeTypeMap;
    };
    V1ObjectFieldSelector.discriminator = undefined;
    V1ObjectFieldSelector.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string",
            "format": ""
        }
    ];
    return V1ObjectFieldSelector;
}());
exports.V1ObjectFieldSelector = V1ObjectFieldSelector;
//# sourceMappingURL=V1ObjectFieldSelector.js.map