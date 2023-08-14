"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumePortworxVolume = void 0;
var V1VolumePortworxVolume = (function () {
    function V1VolumePortworxVolume() {
    }
    V1VolumePortworxVolume.getAttributeTypeMap = function () {
        return V1VolumePortworxVolume.attributeTypeMap;
    };
    V1VolumePortworxVolume.discriminator = undefined;
    V1VolumePortworxVolume.attributeTypeMap = [
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
            "name": "volumeID",
            "baseName": "volumeID",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumePortworxVolume;
}());
exports.V1VolumePortworxVolume = V1VolumePortworxVolume;
//# sourceMappingURL=V1VolumePortworxVolume.js.map