"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Affinity = void 0;
var V1Affinity = (function () {
    function V1Affinity() {
    }
    V1Affinity.getAttributeTypeMap = function () {
        return V1Affinity.attributeTypeMap;
    };
    V1Affinity.discriminator = undefined;
    V1Affinity.attributeTypeMap = [
        {
            "name": "nodeAffinity",
            "baseName": "nodeAffinity",
            "type": "V1AffinityNodeAffinity",
            "format": ""
        },
        {
            "name": "podAffinity",
            "baseName": "podAffinity",
            "type": "V1AffinityPodAffinity",
            "format": ""
        },
        {
            "name": "podAntiAffinity",
            "baseName": "podAntiAffinity",
            "type": "V1AffinityPodAntiAffinity",
            "format": ""
        }
    ];
    return V1Affinity;
}());
exports.V1Affinity = V1Affinity;
//# sourceMappingURL=V1Affinity.js.map