"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1DownwardAPIProjection = void 0;
var V1DownwardAPIProjection = (function () {
    function V1DownwardAPIProjection() {
    }
    V1DownwardAPIProjection.getAttributeTypeMap = function () {
        return V1DownwardAPIProjection.attributeTypeMap;
    };
    V1DownwardAPIProjection.discriminator = undefined;
    V1DownwardAPIProjection.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>",
            "format": ""
        }
    ];
    return V1DownwardAPIProjection;
}());
exports.V1DownwardAPIProjection = V1DownwardAPIProjection;
//# sourceMappingURL=V1DownwardAPIProjection.js.map