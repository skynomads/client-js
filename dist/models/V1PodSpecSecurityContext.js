"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSpecSecurityContext = void 0;
var V1PodSpecSecurityContext = (function () {
    function V1PodSpecSecurityContext() {
    }
    V1PodSpecSecurityContext.getAttributeTypeMap = function () {
        return V1PodSpecSecurityContext.attributeTypeMap;
    };
    V1PodSpecSecurityContext.discriminator = undefined;
    V1PodSpecSecurityContext.attributeTypeMap = [
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
    return V1PodSpecSecurityContext;
}());
exports.V1PodSpecSecurityContext = V1PodSpecSecurityContext;
//# sourceMappingURL=V1PodSpecSecurityContext.js.map