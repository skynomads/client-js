"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeGlusterfs = void 0;
var V1VolumeGlusterfs = (function () {
    function V1VolumeGlusterfs() {
    }
    V1VolumeGlusterfs.getAttributeTypeMap = function () {
        return V1VolumeGlusterfs.attributeTypeMap;
    };
    V1VolumeGlusterfs.discriminator = undefined;
    V1VolumeGlusterfs.attributeTypeMap = [
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
    return V1VolumeGlusterfs;
}());
exports.V1VolumeGlusterfs = V1VolumeGlusterfs;
//# sourceMappingURL=V1VolumeGlusterfs.js.map