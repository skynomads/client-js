"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeProjectionSecret = void 0;
var V1VolumeProjectionSecret = (function () {
    function V1VolumeProjectionSecret() {
    }
    V1VolumeProjectionSecret.getAttributeTypeMap = function () {
        return V1VolumeProjectionSecret.attributeTypeMap;
    };
    V1VolumeProjectionSecret.discriminator = undefined;
    V1VolumeProjectionSecret.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1KeyToPath>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1VolumeProjectionSecret;
}());
exports.V1VolumeProjectionSecret = V1VolumeProjectionSecret;
//# sourceMappingURL=V1VolumeProjectionSecret.js.map