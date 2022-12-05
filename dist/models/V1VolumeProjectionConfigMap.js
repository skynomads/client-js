"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeProjectionConfigMap = void 0;
var V1VolumeProjectionConfigMap = (function () {
    function V1VolumeProjectionConfigMap() {
    }
    V1VolumeProjectionConfigMap.getAttributeTypeMap = function () {
        return V1VolumeProjectionConfigMap.attributeTypeMap;
    };
    V1VolumeProjectionConfigMap.discriminator = undefined;
    V1VolumeProjectionConfigMap.attributeTypeMap = [
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
    return V1VolumeProjectionConfigMap;
}());
exports.V1VolumeProjectionConfigMap = V1VolumeProjectionConfigMap;
//# sourceMappingURL=V1VolumeProjectionConfigMap.js.map