export class V1alpha1ExportTargetStatus {
    static getAttributeTypeMap() {
        return V1alpha1ExportTargetStatus.attributeTypeMap;
    }
    constructor() {
    }
}
V1alpha1ExportTargetStatus.discriminator = undefined;
V1alpha1ExportTargetStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1Condition>",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1ExportTargetStatus.js.map