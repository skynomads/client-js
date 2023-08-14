"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1Features = void 0;
var V1alpha1Features = (function () {
    function V1alpha1Features() {
    }
    V1alpha1Features.getAttributeTypeMap = function () {
        return V1alpha1Features.attributeTypeMap;
    };
    V1alpha1Features.discriminator = undefined;
    V1alpha1Features.attributeTypeMap = [
        {
            "name": "instance",
            "baseName": "instance",
            "type": "V1alpha1TemplateInstance",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "V1alpha1TemplateStorage",
            "format": ""
        }
    ];
    return V1alpha1Features;
}());
exports.V1alpha1Features = V1alpha1Features;
//# sourceMappingURL=V1alpha1Features.js.map