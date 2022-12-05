"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EphemeralVolumeSource = void 0;
var V1EphemeralVolumeSource = (function () {
    function V1EphemeralVolumeSource() {
    }
    V1EphemeralVolumeSource.getAttributeTypeMap = function () {
        return V1EphemeralVolumeSource.attributeTypeMap;
    };
    V1EphemeralVolumeSource.discriminator = undefined;
    V1EphemeralVolumeSource.attributeTypeMap = [
        {
            "name": "volumeClaimTemplate",
            "baseName": "volumeClaimTemplate",
            "type": "V1EphemeralVolumeSourceVolumeClaimTemplate",
            "format": ""
        }
    ];
    return V1EphemeralVolumeSource;
}());
exports.V1EphemeralVolumeSource = V1EphemeralVolumeSource;
//# sourceMappingURL=V1EphemeralVolumeSource.js.map