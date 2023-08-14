"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportSchedule = void 0;
var V1alpha1ExportSchedule = (function () {
    function V1alpha1ExportSchedule() {
    }
    V1alpha1ExportSchedule.getAttributeTypeMap = function () {
        return V1alpha1ExportSchedule.attributeTypeMap;
    };
    V1alpha1ExportSchedule.discriminator = undefined;
    V1alpha1ExportSchedule.attributeTypeMap = [
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
            "type": "V1alpha1ExportScheduleSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1ExportScheduleStatus",
            "format": ""
        }
    ];
    return V1alpha1ExportSchedule;
}());
exports.V1alpha1ExportSchedule = V1alpha1ExportSchedule;
//# sourceMappingURL=V1alpha1ExportSchedule.js.map