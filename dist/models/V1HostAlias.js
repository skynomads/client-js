"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1HostAlias = void 0;
var V1HostAlias = (function () {
    function V1HostAlias() {
    }
    V1HostAlias.getAttributeTypeMap = function () {
        return V1HostAlias.attributeTypeMap;
    };
    V1HostAlias.discriminator = undefined;
    V1HostAlias.attributeTypeMap = [
        {
            "name": "hostnames",
            "baseName": "hostnames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        }
    ];
    return V1HostAlias;
}());
exports.V1HostAlias = V1HostAlias;
//# sourceMappingURL=V1HostAlias.js.map