"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecurityContext = void 0;
var V1SecurityContext = (function () {
    function V1SecurityContext() {
    }
    V1SecurityContext.getAttributeTypeMap = function () {
        return V1SecurityContext.attributeTypeMap;
    };
    V1SecurityContext.discriminator = undefined;
    V1SecurityContext.attributeTypeMap = [
        {
            "name": "allowPrivilegeEscalation",
            "baseName": "allowPrivilegeEscalation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "V1SecurityContextCapabilities",
            "format": ""
        },
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "procMount",
            "baseName": "procMount",
            "type": "V1ProcMountType",
            "format": ""
        },
        {
            "name": "readOnlyRootFilesystem",
            "baseName": "readOnlyRootFilesystem",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number",
            "format": ""
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number",
            "format": ""
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "V1SecurityContextSeLinuxOptions",
            "format": ""
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "V1SecurityContextSeccompProfile",
            "format": ""
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "V1SecurityContextWindowsOptions",
            "format": ""
        }
    ];
    return V1SecurityContext;
}());
exports.V1SecurityContext = V1SecurityContext;
//# sourceMappingURL=V1SecurityContext.js.map