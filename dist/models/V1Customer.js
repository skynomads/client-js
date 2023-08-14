"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Customer = void 0;
var V1Customer = (function () {
    function V1Customer() {
    }
    V1Customer.getAttributeTypeMap = function () {
        return V1Customer.attributeTypeMap;
    };
    V1Customer.discriminator = undefined;
    V1Customer.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "V1Address",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "defaultPaymentMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoices",
            "baseName": "invoices",
            "type": "Array<V1Invoice>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxID",
            "baseName": "taxID",
            "type": "V1TaxID",
            "format": ""
        },
        {
            "name": "vatRate",
            "baseName": "vatRate",
            "type": "number",
            "format": ""
        }
    ];
    return V1Customer;
}());
exports.V1Customer = V1Customer;
//# sourceMappingURL=V1Customer.js.map