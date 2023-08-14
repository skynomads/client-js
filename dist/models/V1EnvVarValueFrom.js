"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVarValueFrom = void 0;
var V1EnvVarValueFrom = (function () {
    function V1EnvVarValueFrom() {
    }
    V1EnvVarValueFrom.getAttributeTypeMap = function () {
        return V1EnvVarValueFrom.attributeTypeMap;
    };
    V1EnvVarValueFrom.discriminator = undefined;
    V1EnvVarValueFrom.attributeTypeMap = [
        {
            "name": "configMapKeyRef",
            "baseName": "configMapKeyRef",
            "type": "V1EnvVarSourceConfigMapKeyRef",
            "format": ""
        },
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "V1EnvVarSourceFieldRef",
            "format": ""
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "V1EnvVarSourceResourceFieldRef",
            "format": ""
        },
        {
            "name": "secretKeyRef",
            "baseName": "secretKeyRef",
            "type": "V1EnvVarSourceSecretKeyRef",
            "format": ""
        }
    ];
    return V1EnvVarValueFrom;
}());
exports.V1EnvVarValueFrom = V1EnvVarValueFrom;
//# sourceMappingURL=V1EnvVarValueFrom.js.map