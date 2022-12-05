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
            "name": "limits",
            "baseName": "limits",
            "type": "any",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "any",
            "format": ""
        }
    ];
    return V1ResourceRequirements;
}());
exports.V1ResourceRequirements = V1ResourceRequirements;
//# sourceMappingURL=V1ResourceRequirements.js.map