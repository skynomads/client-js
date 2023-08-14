"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeCinder = void 0;
var V1VolumeCinder = (function () {
    function V1VolumeCinder() {
    }
    V1VolumeCinder.getAttributeTypeMap = function () {
        return V1VolumeCinder.attributeTypeMap;
    };
    V1VolumeCinder.discriminator = undefined;
    V1VolumeCinder.attributeTypeMap = [
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
            "type": "V1CinderVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "volumeID",
            "baseName": "volumeID",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeCinder;
}());
exports.V1VolumeCinder = V1VolumeCinder;
//# sourceMappingURL=V1VolumeCinder.js.map