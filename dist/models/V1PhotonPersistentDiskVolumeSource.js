"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PhotonPersistentDiskVolumeSource = void 0;
var V1PhotonPersistentDiskVolumeSource = (function () {
    function V1PhotonPersistentDiskVolumeSource() {
    }
    V1PhotonPersistentDiskVolumeSource.getAttributeTypeMap = function () {
        return V1PhotonPersistentDiskVolumeSource.attributeTypeMap;
    };
    V1PhotonPersistentDiskVolumeSource.discriminator = undefined;
    V1PhotonPersistentDiskVolumeSource.attributeTypeMap = [
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
    return V1PhotonPersistentDiskVolumeSource;
}());
exports.V1PhotonPersistentDiskVolumeSource = V1PhotonPersistentDiskVolumeSource;
//# sourceMappingURL=V1PhotonPersistentDiskVolumeSource.js.map