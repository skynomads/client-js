"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeAwsElasticBlockStore = void 0;
var V1VolumeAwsElasticBlockStore = (function () {
    function V1VolumeAwsElasticBlockStore() {
    }
    V1VolumeAwsElasticBlockStore.getAttributeTypeMap = function () {
        return V1VolumeAwsElasticBlockStore.attributeTypeMap;
    };
    V1VolumeAwsElasticBlockStore.discriminator = undefined;
    V1VolumeAwsElasticBlockStore.attributeTypeMap = [
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
    return V1VolumeAwsElasticBlockStore;
}());
exports.V1VolumeAwsElasticBlockStore = V1VolumeAwsElasticBlockStore;
//# sourceMappingURL=V1VolumeAwsElasticBlockStore.js.map