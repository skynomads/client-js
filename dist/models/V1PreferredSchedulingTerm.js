"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PreferredSchedulingTerm = void 0;
var V1PreferredSchedulingTerm = (function () {
    function V1PreferredSchedulingTerm() {
    }
    V1PreferredSchedulingTerm.getAttributeTypeMap = function () {
        return V1PreferredSchedulingTerm.attributeTypeMap;
    };
    V1PreferredSchedulingTerm.discriminator = undefined;
    V1PreferredSchedulingTerm.attributeTypeMap = [
        {
            "name": "preference",
            "baseName": "preference",
            "type": "V1PreferredSchedulingTermPreference",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        }
    ];
    return V1PreferredSchedulingTerm;
}());
exports.V1PreferredSchedulingTerm = V1PreferredSchedulingTerm;
//# sourceMappingURL=V1PreferredSchedulingTerm.js.map