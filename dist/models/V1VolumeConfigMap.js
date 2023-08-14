"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeConfigMap = void 0;
var V1VolumeConfigMap = (function () {
    function V1VolumeConfigMap() {
    }
    V1VolumeConfigMap.getAttributeTypeMap = function () {
        return V1VolumeConfigMap.attributeTypeMap;
    };
    V1VolumeConfigMap.discriminator = undefined;
    V1VolumeConfigMap.attributeTypeMap = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
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
    return V1VolumeConfigMap;
}());
exports.V1VolumeConfigMap = V1VolumeConfigMap;
//# sourceMappingURL=V1VolumeConfigMap.js.map