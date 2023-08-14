"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecretProjection = void 0;
var V1SecretProjection = (function () {
    function V1SecretProjection() {
    }
    V1SecretProjection.getAttributeTypeMap = function () {
        return V1SecretProjection.attributeTypeMap;
    };
    V1SecretProjection.discriminator = undefined;
    V1SecretProjection.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1KeyToPath>",
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
    return V1SecretProjection;
}());
exports.V1SecretProjection = V1SecretProjection;
//# sourceMappingURL=V1SecretProjection.js.map