"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimTemplate = void 0;
var V1PersistentVolumeClaimTemplate = (function () {
    function V1PersistentVolumeClaimTemplate() {
    }
    V1PersistentVolumeClaimTemplate.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimTemplate.attributeTypeMap;
    };
    V1PersistentVolumeClaimTemplate.discriminator = undefined;
    V1PersistentVolumeClaimTemplate.attributeTypeMap = [
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
    return V1PersistentVolumeClaimTemplate;
}());
exports.V1PersistentVolumeClaimTemplate = V1PersistentVolumeClaimTemplate;
//# sourceMappingURL=V1PersistentVolumeClaimTemplate.js.map