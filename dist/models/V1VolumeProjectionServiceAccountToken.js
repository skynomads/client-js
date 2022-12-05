"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeProjectionServiceAccountToken = void 0;
var V1VolumeProjectionServiceAccountToken = (function () {
    function V1VolumeProjectionServiceAccountToken() {
    }
    V1VolumeProjectionServiceAccountToken.getAttributeTypeMap = function () {
        return V1VolumeProjectionServiceAccountToken.attributeTypeMap;
    };
    V1VolumeProjectionServiceAccountToken.discriminator = undefined;
    V1VolumeProjectionServiceAccountToken.attributeTypeMap = [
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
    return V1VolumeProjectionServiceAccountToken;
}());
exports.V1VolumeProjectionServiceAccountToken = V1VolumeProjectionServiceAccountToken;
//# sourceMappingURL=V1VolumeProjectionServiceAccountToken.js.map