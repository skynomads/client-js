"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeCsi = void 0;
var V1VolumeCsi = (function () {
    function V1VolumeCsi() {
    }
    V1VolumeCsi.getAttributeTypeMap = function () {
        return V1VolumeCsi.attributeTypeMap;
    };
    V1VolumeCsi.discriminator = undefined;
    V1VolumeCsi.attributeTypeMap = [
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
    return V1VolumeCsi;
}());
exports.V1VolumeCsi = V1VolumeCsi;
//# sourceMappingURL=V1VolumeCsi.js.map