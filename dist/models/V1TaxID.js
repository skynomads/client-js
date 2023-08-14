"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1TaxID = void 0;
var V1TaxID = (function () {
    function V1TaxID() {
    }
    V1TaxID.getAttributeTypeMap = function () {
        return V1TaxID.attributeTypeMap;
    };
    V1TaxID.discriminator = undefined;
    V1TaxID.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "StripeTaxIDType",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return V1TaxID;
}());
exports.V1TaxID = V1TaxID;
//# sourceMappingURL=V1TaxID.js.map