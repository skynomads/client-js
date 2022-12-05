"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecretVolumeSource = void 0;
var V1SecretVolumeSource = (function () {
    function V1SecretVolumeSource() {
    }
    V1SecretVolumeSource.getAttributeTypeMap = function () {
        return V1SecretVolumeSource.attributeTypeMap;
    };
    V1SecretVolumeSource.discriminator = undefined;
    V1SecretVolumeSource.attributeTypeMap = [
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
    return V1SecretVolumeSource;
}());
exports.V1SecretVolumeSource = V1SecretVolumeSource;
//# sourceMappingURL=V1SecretVolumeSource.js.map