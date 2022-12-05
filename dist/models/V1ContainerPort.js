"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ContainerPort = void 0;
var V1ContainerPort = (function () {
    function V1ContainerPort() {
    }
    V1ContainerPort.getAttributeTypeMap = function () {
        return V1ContainerPort.attributeTypeMap;
    };
    V1ContainerPort.discriminator = undefined;
    V1ContainerPort.attributeTypeMap = [
        {
            "name": "containerPort",
            "baseName": "containerPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "hostIP",
            "baseName": "hostIP",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostPort",
            "baseName": "hostPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "V1Protocol",
            "format": ""
        }
    ];
    return V1ContainerPort;
}());
exports.V1ContainerPort = V1ContainerPort;
//# sourceMappingURL=V1ContainerPort.js.map