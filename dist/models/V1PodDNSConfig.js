"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodDNSConfig = void 0;
var V1PodDNSConfig = (function () {
    function V1PodDNSConfig() {
    }
    V1PodDNSConfig.getAttributeTypeMap = function () {
        return V1PodDNSConfig.attributeTypeMap;
    };
    V1PodDNSConfig.discriminator = undefined;
    V1PodDNSConfig.attributeTypeMap = [
        {
            "name": "nameservers",
            "baseName": "nameservers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<V1PodDNSConfigOption>",
            "format": ""
        },
        {
            "name": "searches",
            "baseName": "searches",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1PodDNSConfig;
}());
exports.V1PodDNSConfig = V1PodDNSConfig;
//# sourceMappingURL=V1PodDNSConfig.js.map