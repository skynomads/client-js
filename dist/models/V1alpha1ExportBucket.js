export class V1alpha1ExportBucket {
    static getAttributeTypeMap() {
        return V1alpha1ExportBucket.attributeTypeMap;
    }
    constructor() {
    }
}
V1alpha1ExportBucket.discriminator = undefined;
V1alpha1ExportBucket.attributeTypeMap = [
    {
        "name": "accessKey",
        "baseName": "accessKey",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpoint",
        "baseName": "endpoint",
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
        "name": "secretKey",
        "baseName": "secretKey",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1ExportBucket.js.map