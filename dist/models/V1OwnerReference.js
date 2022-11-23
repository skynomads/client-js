export class V1OwnerReference {
    static getAttributeTypeMap() {
        return V1OwnerReference.attributeTypeMap;
    }
    constructor() {
    }
}
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
//# sourceMappingURL=V1OwnerReference.js.map