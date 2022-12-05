"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1LifecycleHandlerHttpGet = void 0;
var V1LifecycleHandlerHttpGet = (function () {
    function V1LifecycleHandlerHttpGet() {
    }
    V1LifecycleHandlerHttpGet.getAttributeTypeMap = function () {
        return V1LifecycleHandlerHttpGet.attributeTypeMap;
    };
    V1LifecycleHandlerHttpGet.discriminator = undefined;
    V1LifecycleHandlerHttpGet.attributeTypeMap = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<V1HTTPHeader>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "V1HTTPGetActionPort",
            "format": ""
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "V1URIScheme",
            "format": ""
        }
    ];
    return V1LifecycleHandlerHttpGet;
}());
exports.V1LifecycleHandlerHttpGet = V1LifecycleHandlerHttpGet;
//# sourceMappingURL=V1LifecycleHandlerHttpGet.js.map