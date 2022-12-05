"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Toleration = void 0;
var V1Toleration = (function () {
    function V1Toleration() {
    }
    V1Toleration.getAttributeTypeMap = function () {
        return V1Toleration.attributeTypeMap;
    };
    V1Toleration.discriminator = undefined;
    V1Toleration.attributeTypeMap = [
        {
            "name": "effect",
            "baseName": "effect",
            "type": "V1TaintEffect",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "V1TolerationOperator",
            "format": ""
        },
        {
            "name": "tolerationSeconds",
            "baseName": "tolerationSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return V1Toleration;
}());
exports.V1Toleration = V1Toleration;
//# sourceMappingURL=V1Toleration.js.map