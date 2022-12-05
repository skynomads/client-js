"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvFromSourceConfigMapRef = void 0;
var V1EnvFromSourceConfigMapRef = (function () {
    function V1EnvFromSourceConfigMapRef() {
    }
    V1EnvFromSourceConfigMapRef.getAttributeTypeMap = function () {
        return V1EnvFromSourceConfigMapRef.attributeTypeMap;
    };
    V1EnvFromSourceConfigMapRef.discriminator = undefined;
    V1EnvFromSourceConfigMapRef.attributeTypeMap = [
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
    return V1EnvFromSourceConfigMapRef;
}());
exports.V1EnvFromSourceConfigMapRef = V1EnvFromSourceConfigMapRef;
//# sourceMappingURL=V1EnvFromSourceConfigMapRef.js.map