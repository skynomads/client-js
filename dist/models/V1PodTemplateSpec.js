"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodTemplateSpec = void 0;
var V1PodTemplateSpec = (function () {
    function V1PodTemplateSpec() {
    }
    V1PodTemplateSpec.getAttributeTypeMap = function () {
        return V1PodTemplateSpec.attributeTypeMap;
    };
    V1PodTemplateSpec.discriminator = undefined;
    V1PodTemplateSpec.attributeTypeMap = [
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
    return V1PodTemplateSpec;
}());
exports.V1PodTemplateSpec = V1PodTemplateSpec;
//# sourceMappingURL=V1PodTemplateSpec.js.map