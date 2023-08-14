"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TCPSocketAction = void 0;
var V1TCPSocketAction = (function () {
    function V1TCPSocketAction() {
    }
    V1TCPSocketAction.getAttributeTypeMap = function () {
        return V1TCPSocketAction.attributeTypeMap;
    };
    V1TCPSocketAction.discriminator = undefined;
    V1TCPSocketAction.attributeTypeMap = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "V1TCPSocketActionPort",
            "format": ""
        }
    ];
    return V1TCPSocketAction;
}());
exports.V1TCPSocketAction = V1TCPSocketAction;
//# sourceMappingURL=V1TCPSocketAction.js.map