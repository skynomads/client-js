"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1StorageOSVolumeSource = void 0;
var V1StorageOSVolumeSource = (function () {
    function V1StorageOSVolumeSource() {
    }
    V1StorageOSVolumeSource.getAttributeTypeMap = function () {
        return V1StorageOSVolumeSource.attributeTypeMap;
    };
    V1StorageOSVolumeSource.discriminator = undefined;
    V1StorageOSVolumeSource.attributeTypeMap = [
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
    return V1StorageOSVolumeSource;
}());
exports.V1StorageOSVolumeSource = V1StorageOSVolumeSource;
//# sourceMappingURL=V1StorageOSVolumeSource.js.map