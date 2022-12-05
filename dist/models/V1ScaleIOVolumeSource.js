"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ScaleIOVolumeSource = void 0;
var V1ScaleIOVolumeSource = (function () {
    function V1ScaleIOVolumeSource() {
    }
    V1ScaleIOVolumeSource.getAttributeTypeMap = function () {
        return V1ScaleIOVolumeSource.attributeTypeMap;
    };
    V1ScaleIOVolumeSource.discriminator = undefined;
    V1ScaleIOVolumeSource.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "protectionDomain",
            "baseName": "protectionDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1ScaleIOVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "sslEnabled",
            "baseName": "sslEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storageMode",
            "baseName": "storageMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePool",
            "baseName": "storagePool",
            "type": "string",
            "format": ""
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }
    ];
    return V1ScaleIOVolumeSource;
}());
exports.V1ScaleIOVolumeSource = V1ScaleIOVolumeSource;
//# sourceMappingURL=V1ScaleIOVolumeSource.js.map