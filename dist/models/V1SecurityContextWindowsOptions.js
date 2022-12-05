"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecurityContextWindowsOptions = void 0;
var V1SecurityContextWindowsOptions = (function () {
    function V1SecurityContextWindowsOptions() {
    }
    V1SecurityContextWindowsOptions.getAttributeTypeMap = function () {
        return V1SecurityContextWindowsOptions.attributeTypeMap;
    };
    V1SecurityContextWindowsOptions.discriminator = undefined;
    V1SecurityContextWindowsOptions.attributeTypeMap = [
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
    return V1SecurityContextWindowsOptions;
}());
exports.V1SecurityContextWindowsOptions = V1SecurityContextWindowsOptions;
//# sourceMappingURL=V1SecurityContextWindowsOptions.js.map