"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VsphereVirtualDiskVolumeSource = void 0;
var V1VsphereVirtualDiskVolumeSource = (function () {
    function V1VsphereVirtualDiskVolumeSource() {
    }
    V1VsphereVirtualDiskVolumeSource.getAttributeTypeMap = function () {
        return V1VsphereVirtualDiskVolumeSource.attributeTypeMap;
    };
    V1VsphereVirtualDiskVolumeSource.discriminator = undefined;
    V1VsphereVirtualDiskVolumeSource.attributeTypeMap = [
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
    return V1VsphereVirtualDiskVolumeSource;
}());
exports.V1VsphereVirtualDiskVolumeSource = V1VsphereVirtualDiskVolumeSource;
//# sourceMappingURL=V1VsphereVirtualDiskVolumeSource.js.map