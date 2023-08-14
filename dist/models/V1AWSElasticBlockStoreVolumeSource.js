"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1AWSElasticBlockStoreVolumeSource = void 0;
var V1AWSElasticBlockStoreVolumeSource = (function () {
    function V1AWSElasticBlockStoreVolumeSource() {
    }
    V1AWSElasticBlockStoreVolumeSource.getAttributeTypeMap = function () {
        return V1AWSElasticBlockStoreVolumeSource.attributeTypeMap;
    };
    V1AWSElasticBlockStoreVolumeSource.discriminator = undefined;
    V1AWSElasticBlockStoreVolumeSource.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "number",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeID",
            "baseName": "volumeID",
            "type": "string",
            "format": ""
        }
    ];
    return V1AWSElasticBlockStoreVolumeSource;
}());
exports.V1AWSElasticBlockStoreVolumeSource = V1AWSElasticBlockStoreVolumeSource;
//# sourceMappingURL=V1AWSElasticBlockStoreVolumeSource.js.map