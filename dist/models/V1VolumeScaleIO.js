"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeScaleIO = void 0;
var V1VolumeScaleIO = (function () {
    function V1VolumeScaleIO() {
    }
    V1VolumeScaleIO.getAttributeTypeMap = function () {
        return V1VolumeScaleIO.attributeTypeMap;
    };
    V1VolumeScaleIO.discriminator = undefined;
    V1VolumeScaleIO.attributeTypeMap = [
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
    return V1VolumeScaleIO;
}());
exports.V1VolumeScaleIO = V1VolumeScaleIO;
//# sourceMappingURL=V1VolumeScaleIO.js.map