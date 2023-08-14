"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVarSourceConfigMapKeyRef = void 0;
var V1EnvVarSourceConfigMapKeyRef = (function () {
    function V1EnvVarSourceConfigMapKeyRef() {
    }
    V1EnvVarSourceConfigMapKeyRef.getAttributeTypeMap = function () {
        return V1EnvVarSourceConfigMapKeyRef.attributeTypeMap;
    };
    V1EnvVarSourceConfigMapKeyRef.discriminator = undefined;
    V1EnvVarSourceConfigMapKeyRef.attributeTypeMap = [
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
    return V1EnvVarSourceConfigMapKeyRef;
}());
exports.V1EnvVarSourceConfigMapKeyRef = V1EnvVarSourceConfigMapKeyRef;
//# sourceMappingURL=V1EnvVarSourceConfigMapKeyRef.js.map