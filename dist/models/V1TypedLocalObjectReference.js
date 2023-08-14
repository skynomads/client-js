"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TypedLocalObjectReference = void 0;
var V1TypedLocalObjectReference = (function () {
    function V1TypedLocalObjectReference() {
    }
    V1TypedLocalObjectReference.getAttributeTypeMap = function () {
        return V1TypedLocalObjectReference.attributeTypeMap;
    };
    V1TypedLocalObjectReference.discriminator = undefined;
    V1TypedLocalObjectReference.attributeTypeMap = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return V1TypedLocalObjectReference;
}());
exports.V1TypedLocalObjectReference = V1TypedLocalObjectReference;
//# sourceMappingURL=V1TypedLocalObjectReference.js.map