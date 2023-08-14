"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Capabilities = void 0;
var V1Capabilities = (function () {
    function V1Capabilities() {
    }
    V1Capabilities.getAttributeTypeMap = function () {
        return V1Capabilities.attributeTypeMap;
    };
    V1Capabilities.discriminator = undefined;
    V1Capabilities.attributeTypeMap = [
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
    return V1Capabilities;
}());
exports.V1Capabilities = V1Capabilities;
//# sourceMappingURL=V1Capabilities.js.map