"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVarSourceSecretKeyRef = void 0;
var V1EnvVarSourceSecretKeyRef = (function () {
    function V1EnvVarSourceSecretKeyRef() {
    }
    V1EnvVarSourceSecretKeyRef.getAttributeTypeMap = function () {
        return V1EnvVarSourceSecretKeyRef.attributeTypeMap;
    };
    V1EnvVarSourceSecretKeyRef.discriminator = undefined;
    V1EnvVarSourceSecretKeyRef.attributeTypeMap = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1EnvVarSourceSecretKeyRef;
}());
exports.V1EnvVarSourceSecretKeyRef = V1EnvVarSourceSecretKeyRef;
//# sourceMappingURL=V1EnvVarSourceSecretKeyRef.js.map