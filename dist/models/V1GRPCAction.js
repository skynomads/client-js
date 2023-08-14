"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GRPCAction = void 0;
var V1GRPCAction = (function () {
    function V1GRPCAction() {
    }
    V1GRPCAction.getAttributeTypeMap = function () {
        return V1GRPCAction.attributeTypeMap;
    };
    V1GRPCAction.discriminator = undefined;
    V1GRPCAction.attributeTypeMap = [
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
    return V1GRPCAction;
}());
exports.V1GRPCAction = V1GRPCAction;
//# sourceMappingURL=V1GRPCAction.js.map