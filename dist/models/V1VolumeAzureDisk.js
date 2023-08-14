"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeAzureDisk = void 0;
var V1VolumeAzureDisk = (function () {
    function V1VolumeAzureDisk() {
    }
    V1VolumeAzureDisk.getAttributeTypeMap = function () {
        return V1VolumeAzureDisk.attributeTypeMap;
    };
    V1VolumeAzureDisk.discriminator = undefined;
    V1VolumeAzureDisk.attributeTypeMap = [
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
    return V1VolumeAzureDisk;
}());
exports.V1VolumeAzureDisk = V1VolumeAzureDisk;
//# sourceMappingURL=V1VolumeAzureDisk.js.map