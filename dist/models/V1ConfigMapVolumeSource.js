"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ConfigMapVolumeSource = void 0;
var V1ConfigMapVolumeSource = (function () {
    function V1ConfigMapVolumeSource() {
    }
    V1ConfigMapVolumeSource.getAttributeTypeMap = function () {
        return V1ConfigMapVolumeSource.attributeTypeMap;
    };
    V1ConfigMapVolumeSource.discriminator = undefined;
    V1ConfigMapVolumeSource.attributeTypeMap = [
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
    return V1ConfigMapVolumeSource;
}());
exports.V1ConfigMapVolumeSource = V1ConfigMapVolumeSource;
//# sourceMappingURL=V1ConfigMapVolumeSource.js.map