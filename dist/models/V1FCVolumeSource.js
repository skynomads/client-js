"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1FCVolumeSource = void 0;
var V1FCVolumeSource = (function () {
    function V1FCVolumeSource() {
    }
    V1FCVolumeSource.getAttributeTypeMap = function () {
        return V1FCVolumeSource.attributeTypeMap;
    };
    V1FCVolumeSource.discriminator = undefined;
    V1FCVolumeSource.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "lun",
            "baseName": "lun",
            "type": "number",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "targetWWNs",
            "baseName": "targetWWNs",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "wwids",
            "baseName": "wwids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1FCVolumeSource;
}());
exports.V1FCVolumeSource = V1FCVolumeSource;
//# sourceMappingURL=V1FCVolumeSource.js.map