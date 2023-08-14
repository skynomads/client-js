"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1Template = void 0;
var V1alpha1Template = (function () {
    function V1alpha1Template() {
    }
    V1alpha1Template.getAttributeTypeMap = function () {
        return V1alpha1Template.attributeTypeMap;
    };
    V1alpha1Template.discriminator = undefined;
    V1alpha1Template.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "V1alpha1Features",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "Array<V1alpha1Job>",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "license",
            "baseName": "license",
            "type": "string",
            "format": ""
        },
        {
            "name": "manifests",
            "baseName": "manifests",
            "type": "any",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "Array<V1alpha1Note>",
            "format": ""
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "any",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }
    ];
    return V1alpha1Template;
}());
exports.V1alpha1Template = V1alpha1Template;
//# sourceMappingURL=V1alpha1Template.js.map