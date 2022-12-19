"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainJobResponse = void 0;
var MainJobResponse = (function () {
    function MainJobResponse() {
    }
    MainJobResponse.getAttributeTypeMap = function () {
        return MainJobResponse.attributeTypeMap;
    };
    MainJobResponse.discriminator = undefined;
    MainJobResponse.attributeTypeMap = [
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
    return MainJobResponse;
}());
exports.MainJobResponse = MainJobResponse;
//# sourceMappingURL=MainJobResponse.js.map