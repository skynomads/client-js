"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeDevice = void 0;
var V1VolumeDevice = (function () {
    function V1VolumeDevice() {
    }
    V1VolumeDevice.getAttributeTypeMap = function () {
        return V1VolumeDevice.attributeTypeMap;
    };
    V1VolumeDevice.discriminator = undefined;
    V1VolumeDevice.attributeTypeMap = [
        {
            "name": "devicePath",
            "baseName": "devicePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeDevice;
}());
exports.V1VolumeDevice = V1VolumeDevice;
//# sourceMappingURL=V1VolumeDevice.js.map