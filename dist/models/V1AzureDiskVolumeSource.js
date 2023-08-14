"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1AzureDiskVolumeSource = void 0;
var V1AzureDiskVolumeSource = (function () {
    function V1AzureDiskVolumeSource() {
    }
    V1AzureDiskVolumeSource.getAttributeTypeMap = function () {
        return V1AzureDiskVolumeSource.attributeTypeMap;
    };
    V1AzureDiskVolumeSource.discriminator = undefined;
    V1AzureDiskVolumeSource.attributeTypeMap = [
        {
            "name": "cachingMode",
            "baseName": "cachingMode",
            "type": "V1AzureDataDiskCachingMode",
            "format": ""
        },
        {
            "name": "diskName",
            "baseName": "diskName",
            "type": "string",
            "format": ""
        },
        {
            "name": "diskURI",
            "baseName": "diskURI",
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
            "name": "kind",
            "baseName": "kind",
            "type": "V1AzureDataDiskKind",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1AzureDiskVolumeSource;
}());
exports.V1AzureDiskVolumeSource = V1AzureDiskVolumeSource;
//# sourceMappingURL=V1AzureDiskVolumeSource.js.map