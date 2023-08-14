"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ApplicationStatus = void 0;
var V1alpha1ApplicationStatus = (function () {
    function V1alpha1ApplicationStatus() {
    }
    V1alpha1ApplicationStatus.getAttributeTypeMap = function () {
        return V1alpha1ApplicationStatus.attributeTypeMap;
    };
    V1alpha1ApplicationStatus.discriminator = undefined;
    V1alpha1ApplicationStatus.attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        },
        {
            "name": "hosts",
            "baseName": "hosts",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return V1alpha1ApplicationStatus;
}());
exports.V1alpha1ApplicationStatus = V1alpha1ApplicationStatus;
//# sourceMappingURL=V1alpha1ApplicationStatus.js.map