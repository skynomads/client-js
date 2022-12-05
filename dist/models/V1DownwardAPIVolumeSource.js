"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1DownwardAPIVolumeSource = void 0;
var V1DownwardAPIVolumeSource = (function () {
    function V1DownwardAPIVolumeSource() {
    }
    V1DownwardAPIVolumeSource.getAttributeTypeMap = function () {
        return V1DownwardAPIVolumeSource.attributeTypeMap;
    };
    V1DownwardAPIVolumeSource.discriminator = undefined;
    V1DownwardAPIVolumeSource.attributeTypeMap = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>",
            "format": ""
        }
    ];
    return V1DownwardAPIVolumeSource;
}());
exports.V1DownwardAPIVolumeSource = V1DownwardAPIVolumeSource;
//# sourceMappingURL=V1DownwardAPIVolumeSource.js.map