export class V1alpha1ExportSpec {
    static getAttributeTypeMap() {
        return V1alpha1ExportSpec.attributeTypeMap;
    }
    constructor() {
    }
}
V1alpha1ExportSpec.discriminator = undefined;
V1alpha1ExportSpec.attributeTypeMap = [
    {
        "name": "application",
        "baseName": "application",
        "type": "string",
        "format": ""
    },
    {
        "name": "target",
        "baseName": "target",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1ExportSpec.js.map