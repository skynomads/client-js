"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GlusterfsVolumeSource = void 0;
var V1GlusterfsVolumeSource = (function () {
    function V1GlusterfsVolumeSource() {
    }
    V1GlusterfsVolumeSource.getAttributeTypeMap = function () {
        return V1GlusterfsVolumeSource.attributeTypeMap;
    };
    V1GlusterfsVolumeSource.discriminator = undefined;
    V1GlusterfsVolumeSource.attributeTypeMap = [
        {
            "name": "endpoints",
            "baseName": "endpoints",
            "type": "string",
            "format": ""
        },
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
        }
    ];
    return V1GlusterfsVolumeSource;
}());
exports.V1GlusterfsVolumeSource = V1GlusterfsVolumeSource;
//# sourceMappingURL=V1GlusterfsVolumeSource.js.map