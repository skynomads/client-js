"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportStatus = void 0;
var V1alpha1ExportStatus = (function () {
    function V1alpha1ExportStatus() {
    }
    V1alpha1ExportStatus.getAttributeTypeMap = function () {
        return V1alpha1ExportStatus.attributeTypeMap;
    };
    V1alpha1ExportStatus.discriminator = undefined;
    V1alpha1ExportStatus.attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        },
        {
            "name": "destinationPath",
            "baseName": "destinationPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return V1alpha1ExportStatus;
}());
exports.V1alpha1ExportStatus = V1alpha1ExportStatus;
//# sourceMappingURL=V1alpha1ExportStatus.js.map