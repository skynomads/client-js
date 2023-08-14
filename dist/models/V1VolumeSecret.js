"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeSecret = void 0;
var V1VolumeSecret = (function () {
    function V1VolumeSecret() {
    }
    V1VolumeSecret.getAttributeTypeMap = function () {
        return V1VolumeSecret.attributeTypeMap;
    };
    V1VolumeSecret.discriminator = undefined;
    V1VolumeSecret.attributeTypeMap = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1KeyToPath>",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeSecret;
}());
exports.V1VolumeSecret = V1VolumeSecret;
//# sourceMappingURL=V1VolumeSecret.js.map