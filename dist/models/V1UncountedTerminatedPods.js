"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1UncountedTerminatedPods = void 0;
var V1UncountedTerminatedPods = (function () {
    function V1UncountedTerminatedPods() {
    }
    V1UncountedTerminatedPods.getAttributeTypeMap = function () {
        return V1UncountedTerminatedPods.attributeTypeMap;
    };
    V1UncountedTerminatedPods.discriminator = undefined;
    V1UncountedTerminatedPods.attributeTypeMap = [
        {
            "name": "failed",
            "baseName": "failed",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1UncountedTerminatedPods;
}());
exports.V1UncountedTerminatedPods = V1UncountedTerminatedPods;
//# sourceMappingURL=V1UncountedTerminatedPods.js.map