"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvFromSource = void 0;
var V1EnvFromSource = (function () {
    function V1EnvFromSource() {
    }
    V1EnvFromSource.getAttributeTypeMap = function () {
        return V1EnvFromSource.attributeTypeMap;
    };
    V1EnvFromSource.discriminator = undefined;
    V1EnvFromSource.attributeTypeMap = [
        {
            "name": "configMapRef",
            "baseName": "configMapRef",
            "type": "V1EnvFromSourceConfigMapRef",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1EnvFromSourceSecretRef",
            "format": ""
        }
    ];
    return V1EnvFromSource;
}());
exports.V1EnvFromSource = V1EnvFromSource;
//# sourceMappingURL=V1EnvFromSource.js.map