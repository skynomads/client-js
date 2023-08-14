"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumePersistentVolumeClaim = void 0;
var V1VolumePersistentVolumeClaim = (function () {
    function V1VolumePersistentVolumeClaim() {
    }
    V1VolumePersistentVolumeClaim.getAttributeTypeMap = function () {
        return V1VolumePersistentVolumeClaim.attributeTypeMap;
    };
    V1VolumePersistentVolumeClaim.discriminator = undefined;
    V1VolumePersistentVolumeClaim.attributeTypeMap = [
        {
            "name": "claimName",
            "baseName": "claimName",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1VolumePersistentVolumeClaim;
}());
exports.V1VolumePersistentVolumeClaim = V1VolumePersistentVolumeClaim;
//# sourceMappingURL=V1VolumePersistentVolumeClaim.js.map