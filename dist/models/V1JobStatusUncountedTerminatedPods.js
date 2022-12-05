"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobStatusUncountedTerminatedPods = void 0;
var V1JobStatusUncountedTerminatedPods = (function () {
    function V1JobStatusUncountedTerminatedPods() {
    }
    V1JobStatusUncountedTerminatedPods.getAttributeTypeMap = function () {
        return V1JobStatusUncountedTerminatedPods.attributeTypeMap;
    };
    V1JobStatusUncountedTerminatedPods.discriminator = undefined;
    V1JobStatusUncountedTerminatedPods.attributeTypeMap = [
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
    return V1JobStatusUncountedTerminatedPods;
}());
exports.V1JobStatusUncountedTerminatedPods = V1JobStatusUncountedTerminatedPods;
//# sourceMappingURL=V1JobStatusUncountedTerminatedPods.js.map