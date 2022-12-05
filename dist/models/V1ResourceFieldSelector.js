"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ResourceFieldSelector = void 0;
var V1ResourceFieldSelector = (function () {
    function V1ResourceFieldSelector() {
    }
    V1ResourceFieldSelector.getAttributeTypeMap = function () {
        return V1ResourceFieldSelector.attributeTypeMap;
    };
    V1ResourceFieldSelector.discriminator = undefined;
    V1ResourceFieldSelector.attributeTypeMap = [
        {
            "name": "containerName",
            "baseName": "containerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "divisor",
            "baseName": "divisor",
            "type": "V1ResourceFieldSelectorDivisor",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        }
    ];
    return V1ResourceFieldSelector;
}());
exports.V1ResourceFieldSelector = V1ResourceFieldSelector;
//# sourceMappingURL=V1ResourceFieldSelector.js.map