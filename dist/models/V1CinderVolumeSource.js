"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1CinderVolumeSource = void 0;
var V1CinderVolumeSource = (function () {
    function V1CinderVolumeSource() {
    }
    V1CinderVolumeSource.getAttributeTypeMap = function () {
        return V1CinderVolumeSource.attributeTypeMap;
    };
    V1CinderVolumeSource.discriminator = undefined;
    V1CinderVolumeSource.attributeTypeMap = [
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
    return V1CinderVolumeSource;
}());
exports.V1CinderVolumeSource = V1CinderVolumeSource;
//# sourceMappingURL=V1CinderVolumeSource.js.map