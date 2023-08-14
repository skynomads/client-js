"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ObjectMeta = void 0;
var V1ObjectMeta = (function () {
    function V1ObjectMeta() {
    }
    V1ObjectMeta.getAttributeTypeMap = function () {
        return V1ObjectMeta.attributeTypeMap;
    };
    V1ObjectMeta.discriminator = undefined;
    V1ObjectMeta.attributeTypeMap = [
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "{ [key: string]: string; }",
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
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }
    ];
    return V1ObjectMeta;
}());
exports.V1ObjectMeta = V1ObjectMeta;
//# sourceMappingURL=V1ObjectMeta.js.map