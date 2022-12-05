"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeIscsi = void 0;
var V1VolumeIscsi = (function () {
    function V1VolumeIscsi() {
    }
    V1VolumeIscsi.getAttributeTypeMap = function () {
        return V1VolumeIscsi.attributeTypeMap;
    };
    V1VolumeIscsi.discriminator = undefined;
    V1VolumeIscsi.attributeTypeMap = [
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
    return V1VolumeIscsi;
}());
exports.V1VolumeIscsi = V1VolumeIscsi;
//# sourceMappingURL=V1VolumeIscsi.js.map