"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LifecyclePreStop = void 0;
var V1LifecyclePreStop = (function () {
    function V1LifecyclePreStop() {
    }
    V1LifecyclePreStop.getAttributeTypeMap = function () {
        return V1LifecyclePreStop.attributeTypeMap;
    };
    V1LifecyclePreStop.discriminator = undefined;
    V1LifecyclePreStop.attributeTypeMap = [
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
    return V1LifecyclePreStop;
}());
exports.V1LifecyclePreStop = V1LifecyclePreStop;
//# sourceMappingURL=V1LifecyclePreStop.js.map