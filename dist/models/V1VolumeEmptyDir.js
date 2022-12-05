"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeEmptyDir = void 0;
var V1VolumeEmptyDir = (function () {
    function V1VolumeEmptyDir() {
    }
    V1VolumeEmptyDir.getAttributeTypeMap = function () {
        return V1VolumeEmptyDir.attributeTypeMap;
    };
    V1VolumeEmptyDir.discriminator = undefined;
    V1VolumeEmptyDir.attributeTypeMap = [
        {
            "name": "medium",
            "baseName": "medium",
            "type": "V1StorageMedium",
            "format": ""
        },
        {
            "name": "sizeLimit",
            "baseName": "sizeLimit",
            "type": "V1EmptyDirVolumeSourceSizeLimit",
            "format": ""
        }
    ];
    return V1VolumeEmptyDir;
}());
exports.V1VolumeEmptyDir = V1VolumeEmptyDir;
//# sourceMappingURL=V1VolumeEmptyDir.js.map