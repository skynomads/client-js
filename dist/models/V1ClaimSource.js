"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ClaimSource = void 0;
var V1ClaimSource = (function () {
    function V1ClaimSource() {
    }
    V1ClaimSource.getAttributeTypeMap = function () {
        return V1ClaimSource.attributeTypeMap;
    };
    V1ClaimSource.discriminator = undefined;
    V1ClaimSource.attributeTypeMap = [
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
    return V1ClaimSource;
}());
exports.V1ClaimSource = V1ClaimSource;
//# sourceMappingURL=V1ClaimSource.js.map