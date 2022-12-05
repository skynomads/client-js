"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1DownwardAPIVolumeFileResourceFieldRef = void 0;
var V1DownwardAPIVolumeFileResourceFieldRef = (function () {
    function V1DownwardAPIVolumeFileResourceFieldRef() {
    }
    V1DownwardAPIVolumeFileResourceFieldRef.getAttributeTypeMap = function () {
        return V1DownwardAPIVolumeFileResourceFieldRef.attributeTypeMap;
    };
    V1DownwardAPIVolumeFileResourceFieldRef.discriminator = undefined;
    V1DownwardAPIVolumeFileResourceFieldRef.attributeTypeMap = [
        {
            "name": "containerName",
            "baseName": "containerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "divisor",
            "baseName": "divisor",
            "type": "V1ResourceFieldSelectorDivisor",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        }
    ];
    return V1DownwardAPIVolumeFileResourceFieldRef;
}());
exports.V1DownwardAPIVolumeFileResourceFieldRef = V1DownwardAPIVolumeFileResourceFieldRef;
//# sourceMappingURL=V1DownwardAPIVolumeFileResourceFieldRef.js.map