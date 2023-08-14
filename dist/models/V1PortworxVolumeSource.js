"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PortworxVolumeSource = void 0;
var V1PortworxVolumeSource = (function () {
    function V1PortworxVolumeSource() {
    }
    V1PortworxVolumeSource.getAttributeTypeMap = function () {
        return V1PortworxVolumeSource.attributeTypeMap;
    };
    V1PortworxVolumeSource.discriminator = undefined;
    V1PortworxVolumeSource.attributeTypeMap = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeID",
            "baseName": "volumeID",
            "type": "string",
            "format": ""
        }
    ];
    return V1PortworxVolumeSource;
}());
exports.V1PortworxVolumeSource = V1PortworxVolumeSource;
//# sourceMappingURL=V1PortworxVolumeSource.js.map