"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SeccompProfile = void 0;
var V1SeccompProfile = (function () {
    function V1SeccompProfile() {
    }
    V1SeccompProfile.getAttributeTypeMap = function () {
        return V1SeccompProfile.attributeTypeMap;
    };
    V1SeccompProfile.discriminator = undefined;
    V1SeccompProfile.attributeTypeMap = [
        {
            "name": "localhostProfile",
            "baseName": "localhostProfile",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V1SeccompProfileType",
            "format": ""
        }
    ];
    return V1SeccompProfile;
}());
exports.V1SeccompProfile = V1SeccompProfile;
//# sourceMappingURL=V1SeccompProfile.js.map