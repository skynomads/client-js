"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1RBDVolumeSource = void 0;
var V1RBDVolumeSource = (function () {
    function V1RBDVolumeSource() {
    }
    V1RBDVolumeSource.getAttributeTypeMap = function () {
        return V1RBDVolumeSource.attributeTypeMap;
    };
    V1RBDVolumeSource.discriminator = undefined;
    V1RBDVolumeSource.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "keyring",
            "baseName": "keyring",
            "type": "string",
            "format": ""
        },
        {
            "name": "monitors",
            "baseName": "monitors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1RBDVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }
    ];
    return V1RBDVolumeSource;
}());
exports.V1RBDVolumeSource = V1RBDVolumeSource;
//# sourceMappingURL=V1RBDVolumeSource.js.map