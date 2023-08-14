"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeVsphereVolume = void 0;
var V1VolumeVsphereVolume = (function () {
    function V1VolumeVsphereVolume() {
    }
    V1VolumeVsphereVolume.getAttributeTypeMap = function () {
        return V1VolumeVsphereVolume.attributeTypeMap;
    };
    V1VolumeVsphereVolume.discriminator = undefined;
    V1VolumeVsphereVolume.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePolicyID",
            "baseName": "storagePolicyID",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePolicyName",
            "baseName": "storagePolicyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumePath",
            "baseName": "volumePath",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeVsphereVolume;
}());
exports.V1VolumeVsphereVolume = V1VolumeVsphereVolume;
//# sourceMappingURL=V1VolumeVsphereVolume.js.map