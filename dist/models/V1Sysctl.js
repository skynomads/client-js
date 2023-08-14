"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Sysctl = void 0;
var V1Sysctl = (function () {
    function V1Sysctl() {
    }
    V1Sysctl.getAttributeTypeMap = function () {
        return V1Sysctl.attributeTypeMap;
    };
    V1Sysctl.discriminator = undefined;
    V1Sysctl.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return V1Sysctl;
}());
exports.V1Sysctl = V1Sysctl;
//# sourceMappingURL=V1Sysctl.js.map