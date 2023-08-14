"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportScheduleStatus = void 0;
var V1alpha1ExportScheduleStatus = (function () {
    function V1alpha1ExportScheduleStatus() {
    }
    V1alpha1ExportScheduleStatus.getAttributeTypeMap = function () {
        return V1alpha1ExportScheduleStatus.attributeTypeMap;
    };
    V1alpha1ExportScheduleStatus.discriminator = undefined;
    V1alpha1ExportScheduleStatus.attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        }
    ];
    return V1alpha1ExportScheduleStatus;
}());
exports.V1alpha1ExportScheduleStatus = V1alpha1ExportScheduleStatus;
//# sourceMappingURL=V1alpha1ExportScheduleStatus.js.map