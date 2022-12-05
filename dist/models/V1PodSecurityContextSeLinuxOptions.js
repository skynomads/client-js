"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSecurityContextSeLinuxOptions = void 0;
var V1PodSecurityContextSeLinuxOptions = (function () {
    function V1PodSecurityContextSeLinuxOptions() {
    }
    V1PodSecurityContextSeLinuxOptions.getAttributeTypeMap = function () {
        return V1PodSecurityContextSeLinuxOptions.attributeTypeMap;
    };
    V1PodSecurityContextSeLinuxOptions.discriminator = undefined;
    V1PodSecurityContextSeLinuxOptions.attributeTypeMap = [
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
    return V1PodSecurityContextSeLinuxOptions;
}());
exports.V1PodSecurityContextSeLinuxOptions = V1PodSecurityContextSeLinuxOptions;
//# sourceMappingURL=V1PodSecurityContextSeLinuxOptions.js.map