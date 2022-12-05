"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1JobStatus = void 0;
var V1JobStatus = (function () {
    function V1JobStatus() {
    }
    V1JobStatus.getAttributeTypeMap = function () {
        return V1JobStatus.attributeTypeMap;
    };
    V1JobStatus.discriminator = undefined;
    V1JobStatus.attributeTypeMap = [
        {
            "name": "active",
            "baseName": "active",
            "type": "number",
            "format": ""
        },
        {
            "name": "completedIndexes",
            "baseName": "completedIndexes",
            "type": "string",
            "format": ""
        },
        {
            "name": "completionTime",
            "baseName": "completionTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1JobCondition>",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "number",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "number",
            "format": ""
        },
        {
            "name": "uncountedTerminatedPods",
            "baseName": "uncountedTerminatedPods",
            "type": "V1JobStatusUncountedTerminatedPods",
            "format": ""
        }
    ];
    return V1JobStatus;
}());
exports.V1JobStatus = V1JobStatus;
//# sourceMappingURL=V1JobStatus.js.map