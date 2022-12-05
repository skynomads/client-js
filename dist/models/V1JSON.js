"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JSON = void 0;
var V1JSON = (function () {
    function V1JSON() {
    }
    V1JSON.getAttributeTypeMap = function () {
        return V1JSON.attributeTypeMap;
    };
    V1JSON.discriminator = undefined;
    V1JSON.attributeTypeMap = [
        {
            "name": "raw",
            "baseName": "raw",
            "type": "Array<number>",
            "format": ""
        }
    ];
    return V1JSON;
}());
exports.V1JSON = V1JSON;
//# sourceMappingURL=V1JSON.js.map