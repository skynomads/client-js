"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Job = void 0;
var V1Job = (function () {
    function V1Job() {
    }
    V1Job.getAttributeTypeMap = function () {
        return V1Job.attributeTypeMap;
    };
    V1Job.discriminator = undefined;
    V1Job.attributeTypeMap = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1JobMetadata",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1JobSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1JobStatus",
            "format": ""
        }
    ];
    return V1Job;
}());
exports.V1Job = V1Job;
//# sourceMappingURL=V1Job.js.map