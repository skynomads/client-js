"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvFromSourceSecretRef = void 0;
var V1EnvFromSourceSecretRef = (function () {
    function V1EnvFromSourceSecretRef() {
    }
    V1EnvFromSourceSecretRef.getAttributeTypeMap = function () {
        return V1EnvFromSourceSecretRef.attributeTypeMap;
    };
    V1EnvFromSourceSecretRef.discriminator = undefined;
    V1EnvFromSourceSecretRef.attributeTypeMap = [
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
    return V1EnvFromSourceSecretRef;
}());
exports.V1EnvFromSourceSecretRef = V1EnvFromSourceSecretRef;
//# sourceMappingURL=V1EnvFromSourceSecretRef.js.map