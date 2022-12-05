"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodSpecAffinity = void 0;
var V1PodSpecAffinity = (function () {
    function V1PodSpecAffinity() {
    }
    V1PodSpecAffinity.getAttributeTypeMap = function () {
        return V1PodSpecAffinity.attributeTypeMap;
    };
    V1PodSpecAffinity.discriminator = undefined;
    V1PodSpecAffinity.attributeTypeMap = [
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
    return V1PodSpecAffinity;
}());
exports.V1PodSpecAffinity = V1PodSpecAffinity;
//# sourceMappingURL=V1PodSpecAffinity.js.map