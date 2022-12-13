"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1BlockStorage = void 0;
var V1alpha1BlockStorage = (function () {
    function V1alpha1BlockStorage() {
    }
    V1alpha1BlockStorage.getAttributeTypeMap = function () {
        return V1alpha1BlockStorage.attributeTypeMap;
    };
    V1alpha1BlockStorage.discriminator = undefined;
    V1alpha1BlockStorage.attributeTypeMap = [
        {
            "name": "size",
            "baseName": "size",
            "type": "ResourceQuantity",
            "format": ""
        }
    ];
    return V1alpha1BlockStorage;
}());
exports.V1alpha1BlockStorage = V1alpha1BlockStorage;
//# sourceMappingURL=V1alpha1BlockStorage.js.map