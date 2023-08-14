"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecretKeySelector = void 0;
var V1SecretKeySelector = (function () {
    function V1SecretKeySelector() {
    }
    V1SecretKeySelector.getAttributeTypeMap = function () {
        return V1SecretKeySelector.attributeTypeMap;
    };
    V1SecretKeySelector.discriminator = undefined;
    V1SecretKeySelector.attributeTypeMap = [
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
    return V1SecretKeySelector;
}());
exports.V1SecretKeySelector = V1SecretKeySelector;
//# sourceMappingURL=V1SecretKeySelector.js.map