"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1DownwardAPIVolumeFile = void 0;
var V1DownwardAPIVolumeFile = (function () {
    function V1DownwardAPIVolumeFile() {
    }
    V1DownwardAPIVolumeFile.getAttributeTypeMap = function () {
        return V1DownwardAPIVolumeFile.attributeTypeMap;
    };
    V1DownwardAPIVolumeFile.discriminator = undefined;
    V1DownwardAPIVolumeFile.attributeTypeMap = [
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "V1DownwardAPIVolumeFileFieldRef",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "V1DownwardAPIVolumeFileResourceFieldRef",
            "format": ""
        }
    ];
    return V1DownwardAPIVolumeFile;
}());
exports.V1DownwardAPIVolumeFile = V1DownwardAPIVolumeFile;
//# sourceMappingURL=V1DownwardAPIVolumeFile.js.map