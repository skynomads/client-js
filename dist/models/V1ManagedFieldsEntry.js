export class V1ManagedFieldsEntry {
    static getAttributeTypeMap() {
        return V1ManagedFieldsEntry.attributeTypeMap;
    }
    constructor() {
    }
}
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
        "type": "string",
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
//# sourceMappingURL=V1ManagedFieldsEntry.js.map