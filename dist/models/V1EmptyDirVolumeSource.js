"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EmptyDirVolumeSource = void 0;
var V1EmptyDirVolumeSource = (function () {
    function V1EmptyDirVolumeSource() {
    }
    V1EmptyDirVolumeSource.getAttributeTypeMap = function () {
        return V1EmptyDirVolumeSource.attributeTypeMap;
    };
    V1EmptyDirVolumeSource.discriminator = undefined;
    V1EmptyDirVolumeSource.attributeTypeMap = [
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
    return V1EmptyDirVolumeSource;
}());
exports.V1EmptyDirVolumeSource = V1EmptyDirVolumeSource;
//# sourceMappingURL=V1EmptyDirVolumeSource.js.map