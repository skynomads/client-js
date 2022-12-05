"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1HTTPGetActionPort = void 0;
var V1HTTPGetActionPort = (function () {
    function V1HTTPGetActionPort() {
    }
    V1HTTPGetActionPort.getAttributeTypeMap = function () {
        return V1HTTPGetActionPort.attributeTypeMap;
    };
    V1HTTPGetActionPort.discriminator = undefined;
    V1HTTPGetActionPort.attributeTypeMap = [
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
    return V1HTTPGetActionPort;
}());
exports.V1HTTPGetActionPort = V1HTTPGetActionPort;
//# sourceMappingURL=V1HTTPGetActionPort.js.map