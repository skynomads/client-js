"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1FlockerVolumeSource = void 0;
var V1FlockerVolumeSource = (function () {
    function V1FlockerVolumeSource() {
    }
    V1FlockerVolumeSource.getAttributeTypeMap = function () {
        return V1FlockerVolumeSource.attributeTypeMap;
    };
    V1FlockerVolumeSource.discriminator = undefined;
    V1FlockerVolumeSource.attributeTypeMap = [
        {
            "name": "datasetName",
            "baseName": "datasetName",
            "type": "string",
            "format": ""
        },
        {
            "name": "datasetUUID",
            "baseName": "datasetUUID",
            "type": "string",
            "format": ""
        }
    ];
    return V1FlockerVolumeSource;
}());
exports.V1FlockerVolumeSource = V1FlockerVolumeSource;
//# sourceMappingURL=V1FlockerVolumeSource.js.map