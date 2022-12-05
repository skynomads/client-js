"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimSpecResources = void 0;
var V1PersistentVolumeClaimSpecResources = (function () {
    function V1PersistentVolumeClaimSpecResources() {
    }
    V1PersistentVolumeClaimSpecResources.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimSpecResources.attributeTypeMap;
    };
    V1PersistentVolumeClaimSpecResources.discriminator = undefined;
    V1PersistentVolumeClaimSpecResources.attributeTypeMap = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "any",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "any",
            "format": ""
        }
    ];
    return V1PersistentVolumeClaimSpecResources;
}());
exports.V1PersistentVolumeClaimSpecResources = V1PersistentVolumeClaimSpecResources;
//# sourceMappingURL=V1PersistentVolumeClaimSpecResources.js.map