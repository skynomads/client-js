"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PaymentMethod = void 0;
var V1PaymentMethod = (function () {
    function V1PaymentMethod() {
    }
    V1PaymentMethod.getAttributeTypeMap = function () {
        return V1PaymentMethod.attributeTypeMap;
    };
    V1PaymentMethod.discriminator = undefined;
    V1PaymentMethod.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "StripePaymentMethodType",
            "format": ""
        }
    ];
    return V1PaymentMethod;
}());
exports.V1PaymentMethod = V1PaymentMethod;
//# sourceMappingURL=V1PaymentMethod.js.map