"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ManagedFieldsEntry = void 0;
var V1ManagedFieldsEntry = (function () {
    function V1ManagedFieldsEntry() {
    }
    V1ManagedFieldsEntry.getAttributeTypeMap = function () {
        return V1ManagedFieldsEntry.attributeTypeMap;
    };
    V1ManagedFieldsEntry.discriminator = undefined;
    V1ManagedFieldsEntry.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldsType",
            "baseName": "fieldsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldsV1",
            "baseName": "fieldsV1",
            "type": "any",
            "format": ""
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "string",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "V1ManagedFieldsOperationType",
            "format": ""
        },
        {
            "name": "subresource",
            "baseName": "subresource",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "string",
            "format": ""
        }
    ];
    return V1ManagedFieldsEntry;
}());
exports.V1ManagedFieldsEntry = V1ManagedFieldsEntry;
//# sourceMappingURL=V1ManagedFieldsEntry.js.map