"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeProjected = void 0;
var V1VolumeProjected = (function () {
    function V1VolumeProjected() {
    }
    V1VolumeProjected.getAttributeTypeMap = function () {
        return V1VolumeProjected.attributeTypeMap;
    };
    V1VolumeProjected.discriminator = undefined;
    V1VolumeProjected.attributeTypeMap = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<V1VolumeProjection>",
            "format": ""
        }
    ];
    return V1VolumeProjected;
}());
exports.V1VolumeProjected = V1VolumeProjected;
//# sourceMappingURL=V1VolumeProjected.js.map