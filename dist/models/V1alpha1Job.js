"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1Job = void 0;
var V1alpha1Job = (function () {
    function V1alpha1Job() {
    }
    V1alpha1Job.getAttributeTypeMap = function () {
        return V1alpha1Job.attributeTypeMap;
    };
    V1alpha1Job.discriminator = undefined;
    V1alpha1Job.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "V1JSON",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1Job",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return V1alpha1Job;
}());
exports.V1alpha1Job = V1alpha1Job;
//# sourceMappingURL=V1alpha1Job.js.map