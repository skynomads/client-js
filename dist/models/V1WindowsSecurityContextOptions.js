"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1WindowsSecurityContextOptions = void 0;
var V1WindowsSecurityContextOptions = (function () {
    function V1WindowsSecurityContextOptions() {
    }
    V1WindowsSecurityContextOptions.getAttributeTypeMap = function () {
        return V1WindowsSecurityContextOptions.attributeTypeMap;
    };
    V1WindowsSecurityContextOptions.discriminator = undefined;
    V1WindowsSecurityContextOptions.attributeTypeMap = [
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
    return V1WindowsSecurityContextOptions;
}());
exports.V1WindowsSecurityContextOptions = V1WindowsSecurityContextOptions;
//# sourceMappingURL=V1WindowsSecurityContextOptions.js.map