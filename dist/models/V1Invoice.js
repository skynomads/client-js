"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Invoice = void 0;
var V1Invoice = (function () {
    function V1Invoice() {
    }
    V1Invoice.getAttributeTypeMap = function () {
        return V1Invoice.attributeTypeMap;
    };
    V1Invoice.discriminator = undefined;
    V1Invoice.attributeTypeMap = [
        {
            "name": "amountDue",
            "baseName": "amountDue",
            "type": "number",
            "format": ""
        },
        {
            "name": "amountRemaining",
            "baseName": "amountRemaining",
            "type": "number",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "number",
            "format": ""
        },
        {
            "name": "hostedInvoiceURL",
            "baseName": "hostedInvoiceURL",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoicePDF",
            "baseName": "invoicePDF",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "periodEnd",
            "baseName": "periodEnd",
            "type": "number",
            "format": ""
        },
        {
            "name": "periodStart",
            "baseName": "periodStart",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StripeInvoiceStatus",
            "format": ""
        }
    ];
    return V1Invoice;
}());
exports.V1Invoice = V1Invoice;
//# sourceMappingURL=V1Invoice.js.map