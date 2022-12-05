"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1QuobyteVolumeSource = void 0;
var V1QuobyteVolumeSource = (function () {
    function V1QuobyteVolumeSource() {
    }
    V1QuobyteVolumeSource.getAttributeTypeMap = function () {
        return V1QuobyteVolumeSource.attributeTypeMap;
    };
    V1QuobyteVolumeSource.discriminator = undefined;
    V1QuobyteVolumeSource.attributeTypeMap = [
        {
            "name": "group",
            "baseName": "group",
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
            "name": "registry",
            "baseName": "registry",
            "type": "string",
            "format": ""
        },
        {
            "name": "tenant",
            "baseName": "tenant",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string",
            "format": ""
        }
    ];
    return V1QuobyteVolumeSource;
}());
exports.V1QuobyteVolumeSource = V1QuobyteVolumeSource;
//# sourceMappingURL=V1QuobyteVolumeSource.js.map