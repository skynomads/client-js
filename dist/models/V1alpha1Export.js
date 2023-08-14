"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1Export = void 0;
var V1alpha1Export = (function () {
    function V1alpha1Export() {
    }
    V1alpha1Export.getAttributeTypeMap = function () {
        return V1alpha1Export.attributeTypeMap;
    };
    V1alpha1Export.discriminator = undefined;
    V1alpha1Export.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1alpha1ExportMetadata",
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
        }
    ];
    return V1alpha1Export;
}());
exports.V1alpha1Export = V1alpha1Export;
//# sourceMappingURL=V1alpha1Export.js.map