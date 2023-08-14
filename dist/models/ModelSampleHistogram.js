"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSampleHistogram = void 0;
var ModelSampleHistogram = (function () {
    function ModelSampleHistogram() {
    }
    ModelSampleHistogram.getAttributeTypeMap = function () {
        return ModelSampleHistogram.attributeTypeMap;
    };
    ModelSampleHistogram.discriminator = undefined;
    ModelSampleHistogram.attributeTypeMap = [
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
    return ModelSampleHistogram;
}());
exports.ModelSampleHistogram = ModelSampleHistogram;
//# sourceMappingURL=ModelSampleHistogram.js.map