"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeCephfs = void 0;
var V1VolumeCephfs = (function () {
    function V1VolumeCephfs() {
    }
    V1VolumeCephfs.getAttributeTypeMap = function () {
        return V1VolumeCephfs.attributeTypeMap;
    };
    V1VolumeCephfs.discriminator = undefined;
    V1VolumeCephfs.attributeTypeMap = [
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
    return V1VolumeCephfs;
}());
exports.V1VolumeCephfs = V1VolumeCephfs;
//# sourceMappingURL=V1VolumeCephfs.js.map