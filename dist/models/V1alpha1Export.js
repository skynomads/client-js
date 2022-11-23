export class V1alpha1Export {
    static getAttributeTypeMap() {
        return V1alpha1Export.attributeTypeMap;
    }
    constructor() {
    }
}
V1alpha1Export.discriminator = undefined;
V1alpha1Export.attributeTypeMap = [
    {
        "name": "annotations",
        "baseName": "annotations",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "creationTimestamp",
        "baseName": "creationTimestamp",
        "type": "string",
        "format": ""
    },
    {
        "name": "deletionGracePeriodSeconds",
        "baseName": "deletionGracePeriodSeconds",
        "type": "number",
        "format": ""
    },
    {
        "name": "deletionTimestamp",
        "baseName": "deletionTimestamp",
        "type": "string",
        "format": ""
    },
    {
        "name": "finalizers",
        "baseName": "finalizers",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "generateName",
        "baseName": "generateName",
        "type": "string",
        "format": ""
    },
    {
        "name": "generation",
        "baseName": "generation",
        "type": "number",
        "format": ""
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string",
        "format": ""
    },
    {
        "name": "labels",
        "baseName": "labels",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "managedFields",
        "baseName": "managedFields",
        "type": "Array<V1ManagedFieldsEntry>",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string",
        "format": ""
    },
    {
        "name": "ownerReferences",
        "baseName": "ownerReferences",
        "type": "Array<V1OwnerReference>",
        "format": ""
    },
    {
        "name": "resourceVersion",
        "baseName": "resourceVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "selfLink",
        "baseName": "selfLink",
        "type": "string",
        "format": ""
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1alpha1ExportSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1alpha1ExportStatus",
        "format": ""
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1Export.js.map