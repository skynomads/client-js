"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ProbeGrpc = void 0;
var V1ProbeGrpc = (function () {
    function V1ProbeGrpc() {
    }
    V1ProbeGrpc.getAttributeTypeMap = function () {
        return V1ProbeGrpc.attributeTypeMap;
    };
    V1ProbeGrpc.discriminator = undefined;
    V1ProbeGrpc.attributeTypeMap = [
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": ""
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "string",
            "format": ""
        }
    ];
    return V1ProbeGrpc;
}());
exports.V1ProbeGrpc = V1ProbeGrpc;
//# sourceMappingURL=V1ProbeGrpc.js.map