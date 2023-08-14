"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ApplicationMetrics = void 0;
var V1ApplicationMetrics = (function () {
    function V1ApplicationMetrics() {
    }
    V1ApplicationMetrics.getAttributeTypeMap = function () {
        return V1ApplicationMetrics.attributeTypeMap;
    };
    V1ApplicationMetrics.discriminator = undefined;
    V1ApplicationMetrics.attributeTypeMap = [
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "Array<ModelSampleStream>",
            "format": ""
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "Array<ModelSampleStream>",
            "format": ""
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "Array<ModelSampleStream>",
            "format": ""
        },
        {
            "name": "postgres",
            "baseName": "postgres",
            "type": "Array<ModelSampleStream>",
            "format": ""
        }
    ];
    return V1ApplicationMetrics;
}());
exports.V1ApplicationMetrics = V1ApplicationMetrics;
//# sourceMappingURL=V1ApplicationMetrics.js.map