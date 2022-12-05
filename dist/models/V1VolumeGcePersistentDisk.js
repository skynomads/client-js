"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeGcePersistentDisk = void 0;
var V1VolumeGcePersistentDisk = (function () {
    function V1VolumeGcePersistentDisk() {
    }
    V1VolumeGcePersistentDisk.getAttributeTypeMap = function () {
        return V1VolumeGcePersistentDisk.attributeTypeMap;
    };
    V1VolumeGcePersistentDisk.discriminator = undefined;
    V1VolumeGcePersistentDisk.attributeTypeMap = [
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
    return V1VolumeGcePersistentDisk;
}());
exports.V1VolumeGcePersistentDisk = V1VolumeGcePersistentDisk;
//# sourceMappingURL=V1VolumeGcePersistentDisk.js.map