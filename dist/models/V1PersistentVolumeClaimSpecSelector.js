"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeClaimSpecSelector = void 0;
var V1PersistentVolumeClaimSpecSelector = (function () {
    function V1PersistentVolumeClaimSpecSelector() {
    }
    V1PersistentVolumeClaimSpecSelector.getAttributeTypeMap = function () {
        return V1PersistentVolumeClaimSpecSelector.attributeTypeMap;
    };
    V1PersistentVolumeClaimSpecSelector.discriminator = undefined;
    V1PersistentVolumeClaimSpecSelector.attributeTypeMap = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1LabelSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchLabels",
            "baseName": "matchLabels",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return V1PersistentVolumeClaimSpecSelector;
}());
exports.V1PersistentVolumeClaimSpecSelector = V1PersistentVolumeClaimSpecSelector;
//# sourceMappingURL=V1PersistentVolumeClaimSpecSelector.js.map