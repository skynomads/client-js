"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportSpec = void 0;
var V1alpha1ExportSpec = (function () {
    function V1alpha1ExportSpec() {
    }
    V1alpha1ExportSpec.getAttributeTypeMap = function () {
        return V1alpha1ExportSpec.attributeTypeMap;
    };
    V1alpha1ExportSpec.discriminator = undefined;
    V1alpha1ExportSpec.attributeTypeMap = [
        {
            "name": "application",
            "baseName": "application",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        }
    ];
    return V1alpha1ExportSpec;
}());
exports.V1alpha1ExportSpec = V1alpha1ExportSpec;
//# sourceMappingURL=V1alpha1ExportSpec.js.map