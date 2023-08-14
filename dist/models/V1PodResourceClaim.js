"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodResourceClaim = void 0;
var V1PodResourceClaim = (function () {
    function V1PodResourceClaim() {
    }
    V1PodResourceClaim.getAttributeTypeMap = function () {
        return V1PodResourceClaim.attributeTypeMap;
    };
    V1PodResourceClaim.discriminator = undefined;
    V1PodResourceClaim.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1PodResourceClaimSource",
            "format": ""
        }
    ];
    return V1PodResourceClaim;
}());
exports.V1PodResourceClaim = V1PodResourceClaim;
//# sourceMappingURL=V1PodResourceClaim.js.map