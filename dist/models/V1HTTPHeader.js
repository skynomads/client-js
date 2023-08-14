"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1HTTPHeader = void 0;
var V1HTTPHeader = (function () {
    function V1HTTPHeader() {
    }
    V1HTTPHeader.getAttributeTypeMap = function () {
        return V1HTTPHeader.attributeTypeMap;
    };
    V1HTTPHeader.discriminator = undefined;
    V1HTTPHeader.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return V1HTTPHeader;
}());
exports.V1HTTPHeader = V1HTTPHeader;
//# sourceMappingURL=V1HTTPHeader.js.map