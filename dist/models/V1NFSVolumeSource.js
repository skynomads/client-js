"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1NFSVolumeSource = void 0;
var V1NFSVolumeSource = (function () {
    function V1NFSVolumeSource() {
    }
    V1NFSVolumeSource.getAttributeTypeMap = function () {
        return V1NFSVolumeSource.attributeTypeMap;
    };
    V1NFSVolumeSource.discriminator = undefined;
    V1NFSVolumeSource.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "path",
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
            "name": "server",
            "baseName": "server",
            "type": "string",
            "format": ""
        }
    ];
    return V1NFSVolumeSource;
}());
exports.V1NFSVolumeSource = V1NFSVolumeSource;
//# sourceMappingURL=V1NFSVolumeSource.js.map