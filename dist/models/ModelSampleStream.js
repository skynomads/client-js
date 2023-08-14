"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSampleStream = void 0;
var ModelSampleStream = (function () {
    function ModelSampleStream() {
    }
    ModelSampleStream.getAttributeTypeMap = function () {
        return ModelSampleStream.attributeTypeMap;
    };
    ModelSampleStream.discriminator = undefined;
    ModelSampleStream.attributeTypeMap = [
        {
            "name": "histograms",
            "baseName": "histograms",
            "type": "Array<ModelSampleHistogramPair>",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ModelSamplePair>",
            "format": ""
        }
    ];
    return ModelSampleStream;
}());
exports.ModelSampleStream = ModelSampleStream;
//# sourceMappingURL=ModelSampleStream.js.map