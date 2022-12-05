"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ProbeTcpSocket = void 0;
var V1ProbeTcpSocket = (function () {
    function V1ProbeTcpSocket() {
    }
    V1ProbeTcpSocket.getAttributeTypeMap = function () {
        return V1ProbeTcpSocket.attributeTypeMap;
    };
    V1ProbeTcpSocket.discriminator = undefined;
    V1ProbeTcpSocket.attributeTypeMap = [
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
    return V1ProbeTcpSocket;
}());
exports.V1ProbeTcpSocket = V1ProbeTcpSocket;
//# sourceMappingURL=V1ProbeTcpSocket.js.map