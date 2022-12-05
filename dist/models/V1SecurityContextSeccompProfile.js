"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecurityContextSeccompProfile = void 0;
var V1SecurityContextSeccompProfile = (function () {
    function V1SecurityContextSeccompProfile() {
    }
    V1SecurityContextSeccompProfile.getAttributeTypeMap = function () {
        return V1SecurityContextSeccompProfile.attributeTypeMap;
    };
    V1SecurityContextSeccompProfile.discriminator = undefined;
    V1SecurityContextSeccompProfile.attributeTypeMap = [
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
    return V1SecurityContextSeccompProfile;
}());
exports.V1SecurityContextSeccompProfile = V1SecurityContextSeccompProfile;
//# sourceMappingURL=V1SecurityContextSeccompProfile.js.map