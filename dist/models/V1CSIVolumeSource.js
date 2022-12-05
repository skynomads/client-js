"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1CSIVolumeSource = void 0;
var V1CSIVolumeSource = (function () {
    function V1CSIVolumeSource() {
    }
    V1CSIVolumeSource.getAttributeTypeMap = function () {
        return V1CSIVolumeSource.attributeTypeMap;
    };
    V1CSIVolumeSource.discriminator = undefined;
    V1CSIVolumeSource.attributeTypeMap = [
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodePublishSecretRef",
            "baseName": "nodePublishSecretRef",
            "type": "V1CSIVolumeSourceNodePublishSecretRef",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeAttributes",
            "baseName": "volumeAttributes",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return V1CSIVolumeSource;
}());
exports.V1CSIVolumeSource = V1CSIVolumeSource;
//# sourceMappingURL=V1CSIVolumeSource.js.map