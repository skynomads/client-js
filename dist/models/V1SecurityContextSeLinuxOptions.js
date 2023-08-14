"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecurityContextSeLinuxOptions = void 0;
var V1SecurityContextSeLinuxOptions = (function () {
    function V1SecurityContextSeLinuxOptions() {
    }
    V1SecurityContextSeLinuxOptions.getAttributeTypeMap = function () {
        return V1SecurityContextSeLinuxOptions.attributeTypeMap;
    };
    V1SecurityContextSeLinuxOptions.discriminator = undefined;
    V1SecurityContextSeLinuxOptions.attributeTypeMap = [
        {
            "name": "level",
            "baseName": "level",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }
    ];
    return V1SecurityContextSeLinuxOptions;
}());
exports.V1SecurityContextSeLinuxOptions = V1SecurityContextSeLinuxOptions;
//# sourceMappingURL=V1SecurityContextSeLinuxOptions.js.map