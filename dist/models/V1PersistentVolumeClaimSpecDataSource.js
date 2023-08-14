"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimSpecDataSource = void 0;
var V1PersistentVolumeClaimSpecDataSource = (function () {
    function V1PersistentVolumeClaimSpecDataSource() {
    }
    V1PersistentVolumeClaimSpecDataSource.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimSpecDataSource.attributeTypeMap;
    };
    V1PersistentVolumeClaimSpecDataSource.discriminator = undefined;
    V1PersistentVolumeClaimSpecDataSource.attributeTypeMap = [
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
        }
    ];
    return V1PersistentVolumeClaimSpecDataSource;
}());
exports.V1PersistentVolumeClaimSpecDataSource = V1PersistentVolumeClaimSpecDataSource;
//# sourceMappingURL=V1PersistentVolumeClaimSpecDataSource.js.map