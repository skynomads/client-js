"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimVolumeSource = void 0;
var V1PersistentVolumeClaimVolumeSource = (function () {
    function V1PersistentVolumeClaimVolumeSource() {
    }
    V1PersistentVolumeClaimVolumeSource.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimVolumeSource.attributeTypeMap;
    };
    V1PersistentVolumeClaimVolumeSource.discriminator = undefined;
    V1PersistentVolumeClaimVolumeSource.attributeTypeMap = [
        {
            "name": "claimName",
            "baseName": "claimName",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1PersistentVolumeClaimVolumeSource;
}());
exports.V1PersistentVolumeClaimVolumeSource = V1PersistentVolumeClaimVolumeSource;
//# sourceMappingURL=V1PersistentVolumeClaimVolumeSource.js.map