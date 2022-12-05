"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceQuantity = void 0;
var ResourceQuantity = (function () {
    function ResourceQuantity() {
    }
    ResourceQuantity.getAttributeTypeMap = function () {
        return ResourceQuantity.attributeTypeMap;
    };
    ResourceQuantity.discriminator = undefined;
    ResourceQuantity.attributeTypeMap = [
        {
            "name": "format",
            "baseName": "Format",
            "type": "string",
            "format": ""
        }
    ];
    return ResourceQuantity;
}());
exports.ResourceQuantity = ResourceQuantity;
//# sourceMappingURL=ResourceQuantity.js.map