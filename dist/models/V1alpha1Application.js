"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1Application = void 0;
var V1alpha1Application = (function () {
    function V1alpha1Application() {
    }
    V1alpha1Application.getAttributeTypeMap = function () {
        return V1alpha1Application.attributeTypeMap;
    };
    V1alpha1Application.discriminator = undefined;
    V1alpha1Application.attributeTypeMap = [
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
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1ApplicationSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1ApplicationStatus",
            "format": ""
        }
    ];
    return V1alpha1Application;
}());
exports.V1alpha1Application = V1alpha1Application;
//# sourceMappingURL=V1alpha1Application.js.map