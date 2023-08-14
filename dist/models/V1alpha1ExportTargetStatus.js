"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportTargetStatus = void 0;
var V1alpha1ExportTargetStatus = (function () {
    function V1alpha1ExportTargetStatus() {
    }
    V1alpha1ExportTargetStatus.getAttributeTypeMap = function () {
        return V1alpha1ExportTargetStatus.attributeTypeMap;
    };
    V1alpha1ExportTargetStatus.discriminator = undefined;
    V1alpha1ExportTargetStatus.attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        }
    ];
    return V1alpha1ExportTargetStatus;
}());
exports.V1alpha1ExportTargetStatus = V1alpha1ExportTargetStatus;
//# sourceMappingURL=V1alpha1ExportTargetStatus.js.map