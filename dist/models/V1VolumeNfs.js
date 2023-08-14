"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeNfs = void 0;
var V1VolumeNfs = (function () {
    function V1VolumeNfs() {
    }
    V1VolumeNfs.getAttributeTypeMap = function () {
        return V1VolumeNfs.attributeTypeMap;
    };
    V1VolumeNfs.discriminator = undefined;
    V1VolumeNfs.attributeTypeMap = [
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
    return V1VolumeNfs;
}());
exports.V1VolumeNfs = V1VolumeNfs;
//# sourceMappingURL=V1VolumeNfs.js.map