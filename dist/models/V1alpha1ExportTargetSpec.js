"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportTargetSpec = void 0;
var V1alpha1ExportTargetSpec = (function () {
    function V1alpha1ExportTargetSpec() {
    }
    V1alpha1ExportTargetSpec.getAttributeTypeMap = function () {
        return V1alpha1ExportTargetSpec.attributeTypeMap;
    };
    V1alpha1ExportTargetSpec.discriminator = undefined;
    V1alpha1ExportTargetSpec.attributeTypeMap = [
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "V1alpha1ExportBucket",
            "format": ""
        }
    ];
    return V1alpha1ExportTargetSpec;
}());
exports.V1alpha1ExportTargetSpec = V1alpha1ExportTargetSpec;
//# sourceMappingURL=V1alpha1ExportTargetSpec.js.map