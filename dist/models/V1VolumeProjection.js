"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeProjection = void 0;
var V1VolumeProjection = (function () {
    function V1VolumeProjection() {
    }
    V1VolumeProjection.getAttributeTypeMap = function () {
        return V1VolumeProjection.attributeTypeMap;
    };
    V1VolumeProjection.discriminator = undefined;
    V1VolumeProjection.attributeTypeMap = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "V1VolumeProjectionConfigMap",
            "format": ""
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "V1VolumeProjectionDownwardAPI",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "V1VolumeProjectionSecret",
            "format": ""
        },
        {
            "name": "serviceAccountToken",
            "baseName": "serviceAccountToken",
            "type": "V1VolumeProjectionServiceAccountToken",
            "format": ""
        }
    ];
    return V1VolumeProjection;
}());
exports.V1VolumeProjection = V1VolumeProjection;
//# sourceMappingURL=V1VolumeProjection.js.map