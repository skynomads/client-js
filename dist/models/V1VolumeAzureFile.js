"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeAzureFile = void 0;
var V1VolumeAzureFile = (function () {
    function V1VolumeAzureFile() {
    }
    V1VolumeAzureFile.getAttributeTypeMap = function () {
        return V1VolumeAzureFile.attributeTypeMap;
    };
    V1VolumeAzureFile.discriminator = undefined;
    V1VolumeAzureFile.attributeTypeMap = [
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareName",
            "baseName": "shareName",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeAzureFile;
}());
exports.V1VolumeAzureFile = V1VolumeAzureFile;
//# sourceMappingURL=V1VolumeAzureFile.js.map