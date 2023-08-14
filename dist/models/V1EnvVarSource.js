"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVarSource = void 0;
var V1EnvVarSource = (function () {
    function V1EnvVarSource() {
    }
    V1EnvVarSource.getAttributeTypeMap = function () {
        return V1EnvVarSource.attributeTypeMap;
    };
    V1EnvVarSource.discriminator = undefined;
    V1EnvVarSource.attributeTypeMap = [
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
    return V1EnvVarSource;
}());
exports.V1EnvVarSource = V1EnvVarSource;
//# sourceMappingURL=V1EnvVarSource.js.map