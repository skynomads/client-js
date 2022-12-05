"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ServiceAccountTokenProjection = void 0;
var V1ServiceAccountTokenProjection = (function () {
    function V1ServiceAccountTokenProjection() {
    }
    V1ServiceAccountTokenProjection.getAttributeTypeMap = function () {
        return V1ServiceAccountTokenProjection.attributeTypeMap;
    };
    V1ServiceAccountTokenProjection.discriminator = undefined;
    V1ServiceAccountTokenProjection.attributeTypeMap = [
        {
            "name": "audience",
            "baseName": "audience",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationSeconds",
            "baseName": "expirationSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }
    ];
    return V1ServiceAccountTokenProjection;
}());
exports.V1ServiceAccountTokenProjection = V1ServiceAccountTokenProjection;
//# sourceMappingURL=V1ServiceAccountTokenProjection.js.map