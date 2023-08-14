"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1RBDVolumeSourceSecretRef = void 0;
var V1RBDVolumeSourceSecretRef = (function () {
    function V1RBDVolumeSourceSecretRef() {
    }
    V1RBDVolumeSourceSecretRef.getAttributeTypeMap = function () {
        return V1RBDVolumeSourceSecretRef.attributeTypeMap;
    };
    V1RBDVolumeSourceSecretRef.discriminator = undefined;
    V1RBDVolumeSourceSecretRef.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return V1RBDVolumeSourceSecretRef;
}());
exports.V1RBDVolumeSourceSecretRef = V1RBDVolumeSourceSecretRef;
//# sourceMappingURL=V1RBDVolumeSourceSecretRef.js.map