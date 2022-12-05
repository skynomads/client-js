"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSecurityContextSeccompProfile = void 0;
var V1PodSecurityContextSeccompProfile = (function () {
    function V1PodSecurityContextSeccompProfile() {
    }
    V1PodSecurityContextSeccompProfile.getAttributeTypeMap = function () {
        return V1PodSecurityContextSeccompProfile.attributeTypeMap;
    };
    V1PodSecurityContextSeccompProfile.discriminator = undefined;
    V1PodSecurityContextSeccompProfile.attributeTypeMap = [
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
    return V1PodSecurityContextSeccompProfile;
}());
exports.V1PodSecurityContextSeccompProfile = V1PodSecurityContextSeccompProfile;
//# sourceMappingURL=V1PodSecurityContextSeccompProfile.js.map