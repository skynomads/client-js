"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVar = void 0;
var V1EnvVar = (function () {
    function V1EnvVar() {
    }
    V1EnvVar.getAttributeTypeMap = function () {
        return V1EnvVar.attributeTypeMap;
    };
    V1EnvVar.discriminator = undefined;
    V1EnvVar.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "valueFrom",
            "baseName": "valueFrom",
            "type": "V1EnvVarValueFrom",
            "format": ""
        }
    ];
    return V1EnvVar;
}());
exports.V1EnvVar = V1EnvVar;
//# sourceMappingURL=V1EnvVar.js.map