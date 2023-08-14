"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Account = void 0;
var V1Account = (function () {
    function V1Account() {
    }
    V1Account.getAttributeTypeMap = function () {
        return V1Account.attributeTypeMap;
    };
    V1Account.discriminator = undefined;
    V1Account.attributeTypeMap = [
        {
            "name": "customer",
            "baseName": "customer",
            "type": "V1Customer",
            "format": ""
        },
        {
            "name": "paymentMethods",
            "baseName": "paymentMethods",
            "type": "Array<V1PaymentMethod>",
            "format": ""
        }
    ];
    return V1Account;
}());
exports.V1Account = V1Account;
//# sourceMappingURL=V1Account.js.map