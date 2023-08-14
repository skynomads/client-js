"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeProjectionDownwardAPI = void 0;
var V1VolumeProjectionDownwardAPI = (function () {
    function V1VolumeProjectionDownwardAPI() {
    }
    V1VolumeProjectionDownwardAPI.getAttributeTypeMap = function () {
        return V1VolumeProjectionDownwardAPI.attributeTypeMap;
    };
    V1VolumeProjectionDownwardAPI.discriminator = undefined;
    V1VolumeProjectionDownwardAPI.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>",
            "format": ""
        }
    ];
    return V1VolumeProjectionDownwardAPI;
}());
exports.V1VolumeProjectionDownwardAPI = V1VolumeProjectionDownwardAPI;
//# sourceMappingURL=V1VolumeProjectionDownwardAPI.js.map