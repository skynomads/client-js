"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeDownwardAPI = void 0;
var V1VolumeDownwardAPI = (function () {
    function V1VolumeDownwardAPI() {
    }
    V1VolumeDownwardAPI.getAttributeTypeMap = function () {
        return V1VolumeDownwardAPI.attributeTypeMap;
    };
    V1VolumeDownwardAPI.discriminator = undefined;
    V1VolumeDownwardAPI.attributeTypeMap = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>",
            "format": ""
        }
    ];
    return V1VolumeDownwardAPI;
}());
exports.V1VolumeDownwardAPI = V1VolumeDownwardAPI;
//# sourceMappingURL=V1VolumeDownwardAPI.js.map