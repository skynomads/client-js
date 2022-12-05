"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GCEPersistentDiskVolumeSource = void 0;
var V1GCEPersistentDiskVolumeSource = (function () {
    function V1GCEPersistentDiskVolumeSource() {
    }
    V1GCEPersistentDiskVolumeSource.getAttributeTypeMap = function () {
        return V1GCEPersistentDiskVolumeSource.attributeTypeMap;
    };
    V1GCEPersistentDiskVolumeSource.discriminator = undefined;
    V1GCEPersistentDiskVolumeSource.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "number",
            "format": ""
        },
        {
            "name": "pdName",
            "baseName": "pdName",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1GCEPersistentDiskVolumeSource;
}());
exports.V1GCEPersistentDiskVolumeSource = V1GCEPersistentDiskVolumeSource;
//# sourceMappingURL=V1GCEPersistentDiskVolumeSource.js.map