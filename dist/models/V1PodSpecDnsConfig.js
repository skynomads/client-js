"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSpecDnsConfig = void 0;
var V1PodSpecDnsConfig = (function () {
    function V1PodSpecDnsConfig() {
    }
    V1PodSpecDnsConfig.getAttributeTypeMap = function () {
        return V1PodSpecDnsConfig.attributeTypeMap;
    };
    V1PodSpecDnsConfig.discriminator = undefined;
    V1PodSpecDnsConfig.attributeTypeMap = [
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
    return V1PodSpecDnsConfig;
}());
exports.V1PodSpecDnsConfig = V1PodSpecDnsConfig;
//# sourceMappingURL=V1PodSpecDnsConfig.js.map