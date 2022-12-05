"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ISCSIVolumeSource = void 0;
var V1ISCSIVolumeSource = (function () {
    function V1ISCSIVolumeSource() {
    }
    V1ISCSIVolumeSource.getAttributeTypeMap = function () {
        return V1ISCSIVolumeSource.attributeTypeMap;
    };
    V1ISCSIVolumeSource.discriminator = undefined;
    V1ISCSIVolumeSource.attributeTypeMap = [
        {
            "name": "chapAuthDiscovery",
            "baseName": "chapAuthDiscovery",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chapAuthSession",
            "baseName": "chapAuthSession",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "initiatorName",
            "baseName": "initiatorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "iqn",
            "baseName": "iqn",
            "type": "string",
            "format": ""
        },
        {
            "name": "iscsiInterface",
            "baseName": "iscsiInterface",
            "type": "string",
            "format": ""
        },
        {
            "name": "lun",
            "baseName": "lun",
            "type": "number",
            "format": ""
        },
        {
            "name": "portals",
            "baseName": "portals",
            "type": "Array<string>",
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
            "type": "V1ISCSIVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "targetPortal",
            "baseName": "targetPortal",
            "type": "string",
            "format": ""
        }
    ];
    return V1ISCSIVolumeSource;
}());
exports.V1ISCSIVolumeSource = V1ISCSIVolumeSource;
//# sourceMappingURL=V1ISCSIVolumeSource.js.map