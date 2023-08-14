"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ResourceRequirements = void 0;
var V1ResourceRequirements = (function () {
    function V1ResourceRequirements() {
    }
    V1ResourceRequirements.getAttributeTypeMap = function () {
        return V1ResourceRequirements.attributeTypeMap;
    };
    V1ResourceRequirements.discriminator = undefined;
    V1ResourceRequirements.attributeTypeMap = [
        {
            "name": "claims",
            "baseName": "claims",
            "type": "Array<V1ResourceClaim>",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        }
    ];
    return V1ResourceRequirements;
}());
exports.V1ResourceRequirements = V1ResourceRequirements;
//# sourceMappingURL=V1ResourceRequirements.js.map