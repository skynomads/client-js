"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1KeyToPath = void 0;
var V1KeyToPath = (function () {
    function V1KeyToPath() {
    }
    V1KeyToPath.getAttributeTypeMap = function () {
        return V1KeyToPath.attributeTypeMap;
    };
    V1KeyToPath.discriminator = undefined;
    V1KeyToPath.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }
    ];
    return V1KeyToPath;
}());
exports.V1KeyToPath = V1KeyToPath;
//# sourceMappingURL=V1KeyToPath.js.map