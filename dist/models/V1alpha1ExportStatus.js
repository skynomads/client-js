export class V1alpha1ExportStatus {
    static getAttributeTypeMap() {
        return V1alpha1ExportStatus.attributeTypeMap;
    }
    constructor() {
    }
}
V1alpha1ExportStatus.discriminator = undefined;
V1alpha1ExportStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1Condition>",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1ExportStatus.js.map