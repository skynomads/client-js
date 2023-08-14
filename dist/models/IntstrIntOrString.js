"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntstrIntOrString = void 0;
var IntstrIntOrString = (function () {
    function IntstrIntOrString() {
    }
    IntstrIntOrString.getAttributeTypeMap = function () {
        return IntstrIntOrString.attributeTypeMap;
    };
    IntstrIntOrString.discriminator = undefined;
    IntstrIntOrString.attributeTypeMap = [
        {
            "name": "intVal",
            "baseName": "intVal",
            "type": "number",
            "format": ""
        },
        {
            "name": "strVal",
            "baseName": "strVal",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IntstrType",
            "format": ""
        }
    ];
    return IntstrIntOrString;
}());
exports.IntstrIntOrString = IntstrIntOrString;
//# sourceMappingURL=IntstrIntOrString.js.map