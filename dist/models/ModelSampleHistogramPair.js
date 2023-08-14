"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSampleHistogramPair = void 0;
var ModelSampleHistogramPair = (function () {
    function ModelSampleHistogramPair() {
    }
    ModelSampleHistogramPair.getAttributeTypeMap = function () {
        return ModelSampleHistogramPair.attributeTypeMap;
    };
    ModelSampleHistogramPair.discriminator = undefined;
    ModelSampleHistogramPair.attributeTypeMap = [
        {
            "name": "histogram",
            "baseName": "histogram",
            "type": "ModelSampleHistogramPairHistogram",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        }
    ];
    return ModelSampleHistogramPair;
}());
exports.ModelSampleHistogramPair = ModelSampleHistogramPair;
//# sourceMappingURL=ModelSampleHistogramPair.js.map