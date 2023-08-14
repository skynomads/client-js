"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodResourceClaimSource = void 0;
var V1PodResourceClaimSource = (function () {
    function V1PodResourceClaimSource() {
    }
    V1PodResourceClaimSource.getAttributeTypeMap = function () {
        return V1PodResourceClaimSource.attributeTypeMap;
    };
    V1PodResourceClaimSource.discriminator = undefined;
    V1PodResourceClaimSource.attributeTypeMap = [
        {
            "name": "resourceClaimName",
            "baseName": "resourceClaimName",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceClaimTemplateName",
            "baseName": "resourceClaimTemplateName",
            "type": "string",
            "format": ""
        }
    ];
    return V1PodResourceClaimSource;
}());
exports.V1PodResourceClaimSource = V1PodResourceClaimSource;
//# sourceMappingURL=V1PodResourceClaimSource.js.map