"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PreferredSchedulingTermPreference = void 0;
var V1PreferredSchedulingTermPreference = (function () {
    function V1PreferredSchedulingTermPreference() {
    }
    V1PreferredSchedulingTermPreference.getAttributeTypeMap = function () {
        return V1PreferredSchedulingTermPreference.attributeTypeMap;
    };
    V1PreferredSchedulingTermPreference.discriminator = undefined;
    V1PreferredSchedulingTermPreference.attributeTypeMap = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        }
    ];
    return V1PreferredSchedulingTermPreference;
}());
exports.V1PreferredSchedulingTermPreference = V1PreferredSchedulingTermPreference;
//# sourceMappingURL=V1PreferredSchedulingTermPreference.js.map