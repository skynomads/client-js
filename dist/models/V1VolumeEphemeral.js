"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeEphemeral = void 0;
var V1VolumeEphemeral = (function () {
    function V1VolumeEphemeral() {
    }
    V1VolumeEphemeral.getAttributeTypeMap = function () {
        return V1VolumeEphemeral.attributeTypeMap;
    };
    V1VolumeEphemeral.discriminator = undefined;
    V1VolumeEphemeral.attributeTypeMap = [
        {
            "name": "volumeClaimTemplate",
            "baseName": "volumeClaimTemplate",
            "type": "V1EphemeralVolumeSourceVolumeClaimTemplate",
            "format": ""
        }
    ];
    return V1VolumeEphemeral;
}());
exports.V1VolumeEphemeral = V1VolumeEphemeral;
//# sourceMappingURL=V1VolumeEphemeral.js.map