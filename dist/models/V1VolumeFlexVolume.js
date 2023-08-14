"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeFlexVolume = void 0;
var V1VolumeFlexVolume = (function () {
    function V1VolumeFlexVolume() {
    }
    V1VolumeFlexVolume.getAttributeTypeMap = function () {
        return V1VolumeFlexVolume.attributeTypeMap;
    };
    V1VolumeFlexVolume.discriminator = undefined;
    V1VolumeFlexVolume.attributeTypeMap = [
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
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }",
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
            "type": "V1FlexVolumeSourceSecretRef",
            "format": ""
        }
    ];
    return V1VolumeFlexVolume;
}());
exports.V1VolumeFlexVolume = V1VolumeFlexVolume;
//# sourceMappingURL=V1VolumeFlexVolume.js.map