"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeFlocker = void 0;
var V1VolumeFlocker = (function () {
    function V1VolumeFlocker() {
    }
    V1VolumeFlocker.getAttributeTypeMap = function () {
        return V1VolumeFlocker.attributeTypeMap;
    };
    V1VolumeFlocker.discriminator = undefined;
    V1VolumeFlocker.attributeTypeMap = [
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
    return V1VolumeFlocker;
}());
exports.V1VolumeFlocker = V1VolumeFlocker;
//# sourceMappingURL=V1VolumeFlocker.js.map