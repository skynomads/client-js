"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeQuobyte = void 0;
var V1VolumeQuobyte = (function () {
    function V1VolumeQuobyte() {
    }
    V1VolumeQuobyte.getAttributeTypeMap = function () {
        return V1VolumeQuobyte.attributeTypeMap;
    };
    V1VolumeQuobyte.discriminator = undefined;
    V1VolumeQuobyte.attributeTypeMap = [
        {
            "name": "group",
            "baseName": "group",
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
            "name": "registry",
            "baseName": "registry",
            "type": "string",
            "format": ""
        },
        {
            "name": "tenant",
            "baseName": "tenant",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeQuobyte;
}());
exports.V1VolumeQuobyte = V1VolumeQuobyte;
//# sourceMappingURL=V1VolumeQuobyte.js.map