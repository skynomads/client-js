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
            "name": "claims",
            "baseName": "claims",
            "type": "Array<V1ResourceClaim>",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        }
    ];
    return V1PersistentVolumeClaimSpecResources;
}());
exports.V1PersistentVolumeClaimSpecResources = V1PersistentVolumeClaimSpecResources;
//# sourceMappingURL=V1PersistentVolumeClaimSpecResources.js.map