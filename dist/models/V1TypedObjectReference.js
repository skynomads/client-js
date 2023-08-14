"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TypedObjectReference = void 0;
var V1TypedObjectReference = (function () {
    function V1TypedObjectReference() {
    }
    V1TypedObjectReference.getAttributeTypeMap = function () {
        return V1TypedObjectReference.attributeTypeMap;
    };
    V1TypedObjectReference.discriminator = undefined;
    V1TypedObjectReference.attributeTypeMap = [
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
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }
    ];
    return V1TypedObjectReference;
}());
exports.V1TypedObjectReference = V1TypedObjectReference;
//# sourceMappingURL=V1TypedObjectReference.js.map