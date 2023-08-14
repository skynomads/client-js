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
            "type": "V1ObjectMeta",
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
        }
    ];
    return V1alpha1ExportTarget;
}());
exports.V1alpha1ExportTarget = V1alpha1ExportTarget;
//# sourceMappingURL=V1alpha1ExportTarget.js.map