"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EphemeralVolumeSourceVolumeClaimTemplate = void 0;
var V1EphemeralVolumeSourceVolumeClaimTemplate = (function () {
    function V1EphemeralVolumeSourceVolumeClaimTemplate() {
    }
    V1EphemeralVolumeSourceVolumeClaimTemplate.getAttributeTypeMap = function () {
        return V1EphemeralVolumeSourceVolumeClaimTemplate.attributeTypeMap;
    };
    V1EphemeralVolumeSourceVolumeClaimTemplate.discriminator = undefined;
    V1EphemeralVolumeSourceVolumeClaimTemplate.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1PersistentVolumeClaimTemplateMetadata",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PersistentVolumeClaimTemplateSpec",
            "format": ""
        }
    ];
    return V1EphemeralVolumeSourceVolumeClaimTemplate;
}());
exports.V1EphemeralVolumeSourceVolumeClaimTemplate = V1EphemeralVolumeSourceVolumeClaimTemplate;
//# sourceMappingURL=V1EphemeralVolumeSourceVolumeClaimTemplate.js.map