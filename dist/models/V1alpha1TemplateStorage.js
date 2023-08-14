"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1TemplateStorage = void 0;
var V1alpha1TemplateStorage = (function () {
    function V1alpha1TemplateStorage() {
    }
    V1alpha1TemplateStorage.getAttributeTypeMap = function () {
        return V1alpha1TemplateStorage.attributeTypeMap;
    };
    V1alpha1TemplateStorage.discriminator = undefined;
    V1alpha1TemplateStorage.attributeTypeMap = [
        {
            "name": "blockStorage",
            "baseName": "blockStorage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "objectStorage",
            "baseName": "objectStorage",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1alpha1TemplateStorage;
}());
exports.V1alpha1TemplateStorage = V1alpha1TemplateStorage;
//# sourceMappingURL=V1alpha1TemplateStorage.js.map