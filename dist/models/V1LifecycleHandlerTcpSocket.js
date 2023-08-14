"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LifecycleHandlerTcpSocket = void 0;
var V1LifecycleHandlerTcpSocket = (function () {
    function V1LifecycleHandlerTcpSocket() {
    }
    V1LifecycleHandlerTcpSocket.getAttributeTypeMap = function () {
        return V1LifecycleHandlerTcpSocket.attributeTypeMap;
    };
    V1LifecycleHandlerTcpSocket.discriminator = undefined;
    V1LifecycleHandlerTcpSocket.attributeTypeMap = [
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
    return V1LifecycleHandlerTcpSocket;
}());
exports.V1LifecycleHandlerTcpSocket = V1LifecycleHandlerTcpSocket;
//# sourceMappingURL=V1LifecycleHandlerTcpSocket.js.map