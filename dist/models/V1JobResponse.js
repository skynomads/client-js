"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobResponse = void 0;
var V1JobResponse = (function () {
    function V1JobResponse() {
    }
    V1JobResponse.getAttributeTypeMap = function () {
        return V1JobResponse.attributeTypeMap;
    };
    V1JobResponse.discriminator = undefined;
    V1JobResponse.attributeTypeMap = [
        {
            "name": "job",
            "baseName": "job",
            "type": "V1Job",
            "format": ""
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1JobResponse;
}());
exports.V1JobResponse = V1JobResponse;
//# sourceMappingURL=V1JobResponse.js.map