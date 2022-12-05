"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1CephFSVolumeSource = void 0;
var V1CephFSVolumeSource = (function () {
    function V1CephFSVolumeSource() {
    }
    V1CephFSVolumeSource.getAttributeTypeMap = function () {
        return V1CephFSVolumeSource.attributeTypeMap;
    };
    V1CephFSVolumeSource.discriminator = undefined;
    V1CephFSVolumeSource.attributeTypeMap = [
        {
            "name": "monitors",
            "baseName": "monitors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
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
            "name": "secretFile",
            "baseName": "secretFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1CephFSVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }
    ];
    return V1CephFSVolumeSource;
}());
exports.V1CephFSVolumeSource = V1CephFSVolumeSource;
//# sourceMappingURL=V1CephFSVolumeSource.js.map