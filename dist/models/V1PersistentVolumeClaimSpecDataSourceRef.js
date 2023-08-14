"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimSpecDataSourceRef = void 0;
var V1PersistentVolumeClaimSpecDataSourceRef = (function () {
    function V1PersistentVolumeClaimSpecDataSourceRef() {
    }
    V1PersistentVolumeClaimSpecDataSourceRef.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimSpecDataSourceRef.attributeTypeMap;
    };
    V1PersistentVolumeClaimSpecDataSourceRef.discriminator = undefined;
    V1PersistentVolumeClaimSpecDataSourceRef.attributeTypeMap = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }
    ];
    return V1PersistentVolumeClaimSpecDataSourceRef;
}());
exports.V1PersistentVolumeClaimSpecDataSourceRef = V1PersistentVolumeClaimSpecDataSourceRef;
//# sourceMappingURL=V1PersistentVolumeClaimSpecDataSourceRef.js.map