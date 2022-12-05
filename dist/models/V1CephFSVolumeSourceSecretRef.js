"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1CephFSVolumeSourceSecretRef = void 0;
var V1CephFSVolumeSourceSecretRef = (function () {
    function V1CephFSVolumeSourceSecretRef() {
    }
    V1CephFSVolumeSourceSecretRef.getAttributeTypeMap = function () {
        return V1CephFSVolumeSourceSecretRef.attributeTypeMap;
    };
    V1CephFSVolumeSourceSecretRef.discriminator = undefined;
    V1CephFSVolumeSourceSecretRef.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return V1CephFSVolumeSourceSecretRef;
}());
exports.V1CephFSVolumeSourceSecretRef = V1CephFSVolumeSourceSecretRef;
//# sourceMappingURL=V1CephFSVolumeSourceSecretRef.js.map