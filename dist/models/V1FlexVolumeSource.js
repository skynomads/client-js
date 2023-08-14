"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1FlexVolumeSource = void 0;
var V1FlexVolumeSource = (function () {
    function V1FlexVolumeSource() {
    }
    V1FlexVolumeSource.getAttributeTypeMap = function () {
        return V1FlexVolumeSource.attributeTypeMap;
    };
    V1FlexVolumeSource.discriminator = undefined;
    V1FlexVolumeSource.attributeTypeMap = [
        {
            "name": "driver",
            "baseName": "driver",
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
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }",
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
            "type": "V1FlexVolumeSourceSecretRef",
            "format": ""
        }
    ];
    return V1FlexVolumeSource;
}());
exports.V1FlexVolumeSource = V1FlexVolumeSource;
//# sourceMappingURL=V1FlexVolumeSource.js.map