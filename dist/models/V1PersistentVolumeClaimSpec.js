"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimSpec = void 0;
var V1PersistentVolumeClaimSpec = (function () {
    function V1PersistentVolumeClaimSpec() {
    }
    V1PersistentVolumeClaimSpec.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimSpec.attributeTypeMap;
    };
    V1PersistentVolumeClaimSpec.discriminator = undefined;
    V1PersistentVolumeClaimSpec.attributeTypeMap = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<V1PersistentVolumeAccessMode>",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "V1PersistentVolumeClaimSpecDataSource",
            "format": ""
        },
        {
            "name": "dataSourceRef",
            "baseName": "dataSourceRef",
            "type": "V1PersistentVolumeClaimSpecDataSourceRef",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1PersistentVolumeClaimSpecResources",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1PersistentVolumeClaimSpecSelector",
            "format": ""
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "V1PersistentVolumeMode",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }
    ];
    return V1PersistentVolumeClaimSpec;
}());
exports.V1PersistentVolumeClaimSpec = V1PersistentVolumeClaimSpec;
//# sourceMappingURL=V1PersistentVolumeClaimSpec.js.map