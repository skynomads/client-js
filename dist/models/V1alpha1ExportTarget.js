"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportTarget = void 0;
var V1alpha1ExportTarget = (function () {
    function V1alpha1ExportTarget() {
    }
    V1alpha1ExportTarget.getAttributeTypeMap = function () {
        return V1alpha1ExportTarget.attributeTypeMap;
    };
    V1alpha1ExportTarget.discriminator = undefined;
    V1alpha1ExportTarget.attributeTypeMap = [
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
            "type": "V1alpha1ExportTargetSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1ExportTargetStatus",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }
    ];
    return V1alpha1ExportTarget;
}());
exports.V1alpha1ExportTarget = V1alpha1ExportTarget;
//# sourceMappingURL=V1alpha1ExportTarget.js.map