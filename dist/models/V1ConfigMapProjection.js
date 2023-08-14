"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ConfigMapProjection = void 0;
var V1ConfigMapProjection = (function () {
    function V1ConfigMapProjection() {
    }
    V1ConfigMapProjection.getAttributeTypeMap = function () {
        return V1ConfigMapProjection.attributeTypeMap;
    };
    V1ConfigMapProjection.discriminator = undefined;
    V1ConfigMapProjection.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1KeyToPath>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1ConfigMapProjection;
}());
exports.V1ConfigMapProjection = V1ConfigMapProjection;
//# sourceMappingURL=V1ConfigMapProjection.js.map