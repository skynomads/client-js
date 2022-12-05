"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodDNSConfigOption = void 0;
var V1PodDNSConfigOption = (function () {
    function V1PodDNSConfigOption() {
    }
    V1PodDNSConfigOption.getAttributeTypeMap = function () {
        return V1PodDNSConfigOption.attributeTypeMap;
    };
    V1PodDNSConfigOption.discriminator = undefined;
    V1PodDNSConfigOption.attributeTypeMap = [
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
    return V1PodDNSConfigOption;
}());
exports.V1PodDNSConfigOption = V1PodDNSConfigOption;
//# sourceMappingURL=V1PodDNSConfigOption.js.map