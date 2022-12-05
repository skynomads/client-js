"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1NodeAffinity = void 0;
var V1NodeAffinity = (function () {
    function V1NodeAffinity() {
    }
    V1NodeAffinity.getAttributeTypeMap = function () {
        return V1NodeAffinity.attributeTypeMap;
    };
    V1NodeAffinity.discriminator = undefined;
    V1NodeAffinity.attributeTypeMap = [
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
    return V1NodeAffinity;
}());
exports.V1NodeAffinity = V1NodeAffinity;
//# sourceMappingURL=V1NodeAffinity.js.map