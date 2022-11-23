export class V1alpha1ExportTargetSpec {
    static getAttributeTypeMap() {
        return V1alpha1ExportTargetSpec.attributeTypeMap;
    }
    constructor() {
    }
}
V1alpha1ExportTargetSpec.discriminator = undefined;
V1alpha1ExportTargetSpec.attributeTypeMap = [
    {
        "name": "bucket",
        "baseName": "bucket",
        "type": "V1alpha1ExportBucket",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1ExportTargetSpec.js.map