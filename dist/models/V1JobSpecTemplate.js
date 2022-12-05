"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobSpecTemplate = void 0;
var V1JobSpecTemplate = (function () {
    function V1JobSpecTemplate() {
    }
    V1JobSpecTemplate.getAttributeTypeMap = function () {
        return V1JobSpecTemplate.attributeTypeMap;
    };
    V1JobSpecTemplate.discriminator = undefined;
    V1JobSpecTemplate.attributeTypeMap = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1JobMetadata",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PodTemplateSpecSpec",
            "format": ""
        }
    ];
    return V1JobSpecTemplate;
}());
exports.V1JobSpecTemplate = V1JobSpecTemplate;
//# sourceMappingURL=V1JobSpecTemplate.js.map