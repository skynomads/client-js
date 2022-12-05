"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSecurityContextWindowsOptions = void 0;
var V1PodSecurityContextWindowsOptions = (function () {
    function V1PodSecurityContextWindowsOptions() {
    }
    V1PodSecurityContextWindowsOptions.getAttributeTypeMap = function () {
        return V1PodSecurityContextWindowsOptions.attributeTypeMap;
    };
    V1PodSecurityContextWindowsOptions.discriminator = undefined;
    V1PodSecurityContextWindowsOptions.attributeTypeMap = [
        {
            "name": "gmsaCredentialSpec",
            "baseName": "gmsaCredentialSpec",
            "type": "string",
            "format": ""
        },
        {
            "name": "gmsaCredentialSpecName",
            "baseName": "gmsaCredentialSpecName",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostProcess",
            "baseName": "hostProcess",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsUserName",
            "baseName": "runAsUserName",
            "type": "string",
            "format": ""
        }
    ];
    return V1PodSecurityContextWindowsOptions;
}());
exports.V1PodSecurityContextWindowsOptions = V1PodSecurityContextWindowsOptions;
//# sourceMappingURL=V1PodSecurityContextWindowsOptions.js.map