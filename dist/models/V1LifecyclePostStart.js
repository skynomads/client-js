"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LifecyclePostStart = void 0;
var V1LifecyclePostStart = (function () {
    function V1LifecyclePostStart() {
    }
    V1LifecyclePostStart.getAttributeTypeMap = function () {
        return V1LifecyclePostStart.attributeTypeMap;
    };
    V1LifecyclePostStart.discriminator = undefined;
    V1LifecyclePostStart.attributeTypeMap = [
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
    return V1LifecyclePostStart;
}());
exports.V1LifecyclePostStart = V1LifecyclePostStart;
//# sourceMappingURL=V1LifecyclePostStart.js.map