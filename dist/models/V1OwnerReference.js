"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1OwnerReference = void 0;
var V1OwnerReference = (function () {
    function V1OwnerReference() {
    }
    V1OwnerReference.getAttributeTypeMap = function () {
        return V1OwnerReference.attributeTypeMap;
    };
    V1OwnerReference.discriminator = undefined;
    V1OwnerReference.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "blockOwnerDeletion",
            "baseName": "blockOwnerDeletion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "controller",
            "baseName": "controller",
            "type": "boolean",
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
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }
    ];
    return V1OwnerReference;
}());
exports.V1OwnerReference = V1OwnerReference;
//# sourceMappingURL=V1OwnerReference.js.map