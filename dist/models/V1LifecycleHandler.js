"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LifecycleHandler = void 0;
var V1LifecycleHandler = (function () {
    function V1LifecycleHandler() {
    }
    V1LifecycleHandler.getAttributeTypeMap = function () {
        return V1LifecycleHandler.attributeTypeMap;
    };
    V1LifecycleHandler.discriminator = undefined;
    V1LifecycleHandler.attributeTypeMap = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1LifecycleHandlerExec",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1LifecycleHandlerHttpGet",
            "format": ""
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1LifecycleHandlerTcpSocket",
            "format": ""
        }
    ];
    return V1LifecycleHandler;
}());
exports.V1LifecycleHandler = V1LifecycleHandler;
//# sourceMappingURL=V1LifecycleHandler.js.map