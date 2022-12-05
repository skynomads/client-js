"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSecurityContext = void 0;
var V1PodSecurityContext = (function () {
    function V1PodSecurityContext() {
    }
    V1PodSecurityContext.getAttributeTypeMap = function () {
        return V1PodSecurityContext.attributeTypeMap;
    };
    V1PodSecurityContext.discriminator = undefined;
    V1PodSecurityContext.attributeTypeMap = [
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "number",
            "format": ""
        },
        {
            "name": "fsGroupChangePolicy",
            "baseName": "fsGroupChangePolicy",
            "type": "V1PodFSGroupChangePolicy",
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
            "type": "V1PodSecurityContextSeLinuxOptions",
            "format": ""
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "V1PodSecurityContextSeccompProfile",
            "format": ""
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "sysctls",
            "baseName": "sysctls",
            "type": "Array<V1Sysctl>",
            "format": ""
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "V1PodSecurityContextWindowsOptions",
            "format": ""
        }
    ];
    return V1PodSecurityContext;
}());
exports.V1PodSecurityContext = V1PodSecurityContext;
//# sourceMappingURL=V1PodSecurityContext.js.map