"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1Note = void 0;
var V1alpha1Note = (function () {
    function V1alpha1Note() {
    }
    V1alpha1Note.getAttributeTypeMap = function () {
        return V1alpha1Note.attributeTypeMap;
    };
    V1alpha1Note.discriminator = undefined;
    V1alpha1Note.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return V1alpha1Note;
}());
exports.V1alpha1Note = V1alpha1Note;
//# sourceMappingURL=V1alpha1Note.js.map