"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TCPSocketActionPort = void 0;
var V1TCPSocketActionPort = (function () {
    function V1TCPSocketActionPort() {
    }
    V1TCPSocketActionPort.getAttributeTypeMap = function () {
        return V1TCPSocketActionPort.attributeTypeMap;
    };
    V1TCPSocketActionPort.discriminator = undefined;
    V1TCPSocketActionPort.attributeTypeMap = [
        {
            "name": "intVal",
            "baseName": "intVal",
            "type": "number",
            "format": ""
        },
        {
            "name": "strVal",
            "baseName": "strVal",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IntstrType",
            "format": ""
        }
    ];
    return V1TCPSocketActionPort;
}());
exports.V1TCPSocketActionPort = V1TCPSocketActionPort;
//# sourceMappingURL=V1TCPSocketActionPort.js.map