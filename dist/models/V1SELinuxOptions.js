"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SELinuxOptions = void 0;
var V1SELinuxOptions = (function () {
    function V1SELinuxOptions() {
    }
    V1SELinuxOptions.getAttributeTypeMap = function () {
        return V1SELinuxOptions.attributeTypeMap;
    };
    V1SELinuxOptions.discriminator = undefined;
    V1SELinuxOptions.attributeTypeMap = [
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
    return V1SELinuxOptions;
}());
exports.V1SELinuxOptions = V1SELinuxOptions;
//# sourceMappingURL=V1SELinuxOptions.js.map