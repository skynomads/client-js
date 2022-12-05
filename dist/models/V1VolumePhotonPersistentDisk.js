"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumePhotonPersistentDisk = void 0;
var V1VolumePhotonPersistentDisk = (function () {
    function V1VolumePhotonPersistentDisk() {
    }
    V1VolumePhotonPersistentDisk.getAttributeTypeMap = function () {
        return V1VolumePhotonPersistentDisk.attributeTypeMap;
    };
    V1VolumePhotonPersistentDisk.discriminator = undefined;
    V1VolumePhotonPersistentDisk.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "pdID",
            "baseName": "pdID",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumePhotonPersistentDisk;
}());
exports.V1VolumePhotonPersistentDisk = V1VolumePhotonPersistentDisk;
//# sourceMappingURL=V1VolumePhotonPersistentDisk.js.map