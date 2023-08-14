"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSampleHistogramPairHistogram = void 0;
var ModelSampleHistogramPairHistogram = (function () {
    function ModelSampleHistogramPairHistogram() {
    }
    ModelSampleHistogramPairHistogram.getAttributeTypeMap = function () {
        return ModelSampleHistogramPairHistogram.attributeTypeMap;
    };
    ModelSampleHistogramPairHistogram.discriminator = undefined;
    ModelSampleHistogramPairHistogram.attributeTypeMap = [
        {
            "name": "buckets",
            "baseName": "buckets",
            "type": "Array<ModelHistogramBucket>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "sum",
            "baseName": "sum",
            "type": "number",
            "format": ""
        }
    ];
    return ModelSampleHistogramPairHistogram;
}());
exports.ModelSampleHistogramPairHistogram = ModelSampleHistogramPairHistogram;
//# sourceMappingURL=ModelSampleHistogramPairHistogram.js.map