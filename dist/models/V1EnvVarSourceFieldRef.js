"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVarSourceFieldRef = void 0;
var V1EnvVarSourceFieldRef = (function () {
    function V1EnvVarSourceFieldRef() {
    }
    V1EnvVarSourceFieldRef.getAttributeTypeMap = function () {
        return V1EnvVarSourceFieldRef.attributeTypeMap;
    };
    V1EnvVarSourceFieldRef.discriminator = undefined;
    V1EnvVarSourceFieldRef.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string",
            "format": ""
        }
    ];
    return V1EnvVarSourceFieldRef;
}());
exports.V1EnvVarSourceFieldRef = V1EnvVarSourceFieldRef;
//# sourceMappingURL=V1EnvVarSourceFieldRef.js.map