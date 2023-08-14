"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSamplePair = void 0;
var ModelSamplePair = (function () {
    function ModelSamplePair() {
    }
    ModelSamplePair.getAttributeTypeMap = function () {
        return ModelSamplePair.attributeTypeMap;
    };
    ModelSamplePair.discriminator = undefined;
    ModelSamplePair.attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        }
    ];
    return ModelSamplePair;
}());
exports.ModelSamplePair = ModelSamplePair;
//# sourceMappingURL=ModelSamplePair.js.map