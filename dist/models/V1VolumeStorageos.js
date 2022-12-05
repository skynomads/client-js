"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeStorageos = void 0;
var V1VolumeStorageos = (function () {
    function V1VolumeStorageos() {
    }
    V1VolumeStorageos.getAttributeTypeMap = function () {
        return V1VolumeStorageos.attributeTypeMap;
    };
    V1VolumeStorageos.discriminator = undefined;
    V1VolumeStorageos.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
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
            "type": "V1StorageOSVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeNamespace",
            "baseName": "volumeNamespace",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeStorageos;
}());
exports.V1VolumeStorageos = V1VolumeStorageos;
//# sourceMappingURL=V1VolumeStorageos.js.map