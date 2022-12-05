"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1AzureFileVolumeSource = void 0;
var V1AzureFileVolumeSource = (function () {
    function V1AzureFileVolumeSource() {
    }
    V1AzureFileVolumeSource.getAttributeTypeMap = function () {
        return V1AzureFileVolumeSource.attributeTypeMap;
    };
    V1AzureFileVolumeSource.discriminator = undefined;
    V1AzureFileVolumeSource.attributeTypeMap = [
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
    return V1AzureFileVolumeSource;
}());
exports.V1AzureFileVolumeSource = V1AzureFileVolumeSource;
//# sourceMappingURL=V1AzureFileVolumeSource.js.map