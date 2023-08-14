"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportScheduleSpec = void 0;
var V1alpha1ExportScheduleSpec = (function () {
    function V1alpha1ExportScheduleSpec() {
    }
    V1alpha1ExportScheduleSpec.getAttributeTypeMap = function () {
        return V1alpha1ExportScheduleSpec.attributeTypeMap;
    };
    V1alpha1ExportScheduleSpec.discriminator = undefined;
    V1alpha1ExportScheduleSpec.attributeTypeMap = [
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1alpha1Export",
            "format": ""
        }
    ];
    return V1alpha1ExportScheduleSpec;
}());
exports.V1alpha1ExportScheduleSpec = V1alpha1ExportScheduleSpec;
//# sourceMappingURL=V1alpha1ExportScheduleSpec.js.map