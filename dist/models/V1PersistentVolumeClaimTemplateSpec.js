"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimTemplateSpec = void 0;
var V1PersistentVolumeClaimTemplateSpec = (function () {
    function V1PersistentVolumeClaimTemplateSpec() {
    }
    V1PersistentVolumeClaimTemplateSpec.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimTemplateSpec.attributeTypeMap;
    };
    V1PersistentVolumeClaimTemplateSpec.discriminator = undefined;
    V1PersistentVolumeClaimTemplateSpec.attributeTypeMap = [
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
    return V1PersistentVolumeClaimTemplateSpec;
}());
exports.V1PersistentVolumeClaimTemplateSpec = V1PersistentVolumeClaimTemplateSpec;
//# sourceMappingURL=V1PersistentVolumeClaimTemplateSpec.js.map