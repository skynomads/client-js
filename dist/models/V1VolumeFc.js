"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeFc = void 0;
var V1VolumeFc = (function () {
    function V1VolumeFc() {
    }
    V1VolumeFc.getAttributeTypeMap = function () {
        return V1VolumeFc.attributeTypeMap;
    };
    V1VolumeFc.discriminator = undefined;
    V1VolumeFc.attributeTypeMap = [
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
    return V1VolumeFc;
}());
exports.V1VolumeFc = V1VolumeFc;
//# sourceMappingURL=V1VolumeFc.js.map