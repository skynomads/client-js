"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ProjectedVolumeSource = void 0;
var V1ProjectedVolumeSource = (function () {
    function V1ProjectedVolumeSource() {
    }
    V1ProjectedVolumeSource.getAttributeTypeMap = function () {
        return V1ProjectedVolumeSource.attributeTypeMap;
    };
    V1ProjectedVolumeSource.discriminator = undefined;
    V1ProjectedVolumeSource.attributeTypeMap = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<V1VolumeProjection>",
            "format": ""
        }
    ];
    return V1ProjectedVolumeSource;
}());
exports.V1ProjectedVolumeSource = V1ProjectedVolumeSource;
//# sourceMappingURL=V1ProjectedVolumeSource.js.map