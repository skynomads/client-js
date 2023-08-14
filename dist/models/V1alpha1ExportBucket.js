"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ExportBucket = void 0;
var V1alpha1ExportBucket = (function () {
    function V1alpha1ExportBucket() {
    }
    V1alpha1ExportBucket.getAttributeTypeMap = function () {
        return V1alpha1ExportBucket.attributeTypeMap;
    };
    V1alpha1ExportBucket.discriminator = undefined;
    V1alpha1ExportBucket.attributeTypeMap = [
        {
            "name": "accessKey",
            "baseName": "accessKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpoint",
            "baseName": "endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretKey",
            "baseName": "secretKey",
            "type": "string",
            "format": ""
        }
    ];
    return V1alpha1ExportBucket;
}());
exports.V1alpha1ExportBucket = V1alpha1ExportBucket;
//# sourceMappingURL=V1alpha1ExportBucket.js.map