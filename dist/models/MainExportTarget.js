"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainExportTarget = void 0;
var MainExportTarget = (function () {
    function MainExportTarget() {
    }
    MainExportTarget.getAttributeTypeMap = function () {
        return MainExportTarget.attributeTypeMap;
    };
    MainExportTarget.discriminator = undefined;
    MainExportTarget.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
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
    return MainExportTarget;
}());
exports.MainExportTarget = MainExportTarget;
//# sourceMappingURL=MainExportTarget.js.map