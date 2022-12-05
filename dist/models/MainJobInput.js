"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainJobInput = void 0;
var MainJobInput = (function () {
    function MainJobInput() {
    }
    MainJobInput.getAttributeTypeMap = function () {
        return MainJobInput.attributeTypeMap;
    };
    MainJobInput.discriminator = undefined;
    MainJobInput.attributeTypeMap = [
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
    return MainJobInput;
}());
exports.MainJobInput = MainJobInput;
//# sourceMappingURL=MainJobInput.js.map