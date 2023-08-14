"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1HTTPGetAction = void 0;
var V1HTTPGetAction = (function () {
    function V1HTTPGetAction() {
    }
    V1HTTPGetAction.getAttributeTypeMap = function () {
        return V1HTTPGetAction.attributeTypeMap;
    };
    V1HTTPGetAction.discriminator = undefined;
    V1HTTPGetAction.attributeTypeMap = [
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
    return V1HTTPGetAction;
}());
exports.V1HTTPGetAction = V1HTTPGetAction;
//# sourceMappingURL=V1HTTPGetAction.js.map