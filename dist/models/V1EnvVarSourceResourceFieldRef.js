"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EnvVarSourceResourceFieldRef = void 0;
var V1EnvVarSourceResourceFieldRef = (function () {
    function V1EnvVarSourceResourceFieldRef() {
    }
    V1EnvVarSourceResourceFieldRef.getAttributeTypeMap = function () {
        return V1EnvVarSourceResourceFieldRef.attributeTypeMap;
    };
    V1EnvVarSourceResourceFieldRef.discriminator = undefined;
    V1EnvVarSourceResourceFieldRef.attributeTypeMap = [
        {
            "name": "containerName",
            "baseName": "containerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "divisor",
            "baseName": "divisor",
            "type": "V1ResourceFieldSelectorDivisor",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        }
    ];
    return V1EnvVarSourceResourceFieldRef;
}());
exports.V1EnvVarSourceResourceFieldRef = V1EnvVarSourceResourceFieldRef;
//# sourceMappingURL=V1EnvVarSourceResourceFieldRef.js.map