"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelHistogramBucket = void 0;
var ModelHistogramBucket = (function () {
    function ModelHistogramBucket() {
    }
    ModelHistogramBucket.getAttributeTypeMap = function () {
        return ModelHistogramBucket.attributeTypeMap;
    };
    ModelHistogramBucket.discriminator = undefined;
    ModelHistogramBucket.attributeTypeMap = [
        {
            "name": "boundaries",
            "baseName": "boundaries",
            "type": "number",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "lower",
            "baseName": "lower",
            "type": "number",
            "format": ""
        },
        {
            "name": "upper",
            "baseName": "upper",
            "type": "number",
            "format": ""
        }
    ];
    return ModelHistogramBucket;
}());
exports.ModelHistogramBucket = ModelHistogramBucket;
//# sourceMappingURL=ModelHistogramBucket.js.map