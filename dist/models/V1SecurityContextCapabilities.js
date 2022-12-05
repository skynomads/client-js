"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecurityContextCapabilities = void 0;
var V1SecurityContextCapabilities = (function () {
    function V1SecurityContextCapabilities() {
    }
    V1SecurityContextCapabilities.getAttributeTypeMap = function () {
        return V1SecurityContextCapabilities.attributeTypeMap;
    };
    V1SecurityContextCapabilities.discriminator = undefined;
    V1SecurityContextCapabilities.attributeTypeMap = [
        {
            "name": "add",
            "baseName": "add",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "drop",
            "baseName": "drop",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1SecurityContextCapabilities;
}());
exports.V1SecurityContextCapabilities = V1SecurityContextCapabilities;
//# sourceMappingURL=V1SecurityContextCapabilities.js.map