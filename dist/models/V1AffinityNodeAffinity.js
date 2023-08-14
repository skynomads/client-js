"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1AffinityNodeAffinity = void 0;
var V1AffinityNodeAffinity = (function () {
    function V1AffinityNodeAffinity() {
    }
    V1AffinityNodeAffinity.getAttributeTypeMap = function () {
        return V1AffinityNodeAffinity.attributeTypeMap;
    };
    V1AffinityNodeAffinity.discriminator = undefined;
    V1AffinityNodeAffinity.attributeTypeMap = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<V1PreferredSchedulingTerm>",
            "format": ""
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
            "format": ""
        }
    ];
    return V1AffinityNodeAffinity;
}());
exports.V1AffinityNodeAffinity = V1AffinityNodeAffinity;
//# sourceMappingURL=V1AffinityNodeAffinity.js.map