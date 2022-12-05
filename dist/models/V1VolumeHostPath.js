"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeHostPath = void 0;
var V1VolumeHostPath = (function () {
    function V1VolumeHostPath() {
    }
    V1VolumeHostPath.getAttributeTypeMap = function () {
        return V1VolumeHostPath.attributeTypeMap;
    };
    V1VolumeHostPath.discriminator = undefined;
    V1VolumeHostPath.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V1HostPathType",
            "format": ""
        }
    ];
    return V1VolumeHostPath;
}());
exports.V1VolumeHostPath = V1VolumeHostPath;
//# sourceMappingURL=V1VolumeHostPath.js.map