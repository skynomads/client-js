"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeRbd = void 0;
var V1VolumeRbd = (function () {
    function V1VolumeRbd() {
    }
    V1VolumeRbd.getAttributeTypeMap = function () {
        return V1VolumeRbd.attributeTypeMap;
    };
    V1VolumeRbd.discriminator = undefined;
    V1VolumeRbd.attributeTypeMap = [
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
    return V1VolumeRbd;
}());
exports.V1VolumeRbd = V1VolumeRbd;
//# sourceMappingURL=V1VolumeRbd.js.map