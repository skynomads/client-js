"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobInput = void 0;
var V1JobInput = (function () {
    function V1JobInput() {
    }
    V1JobInput.getAttributeTypeMap = function () {
        return V1JobInput.attributeTypeMap;
    };
    V1JobInput.discriminator = undefined;
    V1JobInput.attributeTypeMap = [
        {
            "name": "application",
            "baseName": "application",
            "type": "string",
            "format": ""
        },
        {
            "name": "job",
            "baseName": "job",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "any",
            "format": ""
        }
    ];
    return V1JobInput;
}());
exports.V1JobInput = V1JobInput;
//# sourceMappingURL=V1JobInput.js.map