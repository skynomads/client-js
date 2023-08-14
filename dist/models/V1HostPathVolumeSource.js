"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1HostPathVolumeSource = void 0;
var V1HostPathVolumeSource = (function () {
    function V1HostPathVolumeSource() {
    }
    V1HostPathVolumeSource.getAttributeTypeMap = function () {
        return V1HostPathVolumeSource.attributeTypeMap;
    };
    V1HostPathVolumeSource.discriminator = undefined;
    V1HostPathVolumeSource.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V1HostPathType",
            "format": ""
        }
    ];
    return V1HostPathVolumeSource;
}());
exports.V1HostPathVolumeSource = V1HostPathVolumeSource;
//# sourceMappingURL=V1HostPathVolumeSource.js.map