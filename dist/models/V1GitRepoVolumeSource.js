"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1GitRepoVolumeSource = void 0;
var V1GitRepoVolumeSource = (function () {
    function V1GitRepoVolumeSource() {
    }
    V1GitRepoVolumeSource.getAttributeTypeMap = function () {
        return V1GitRepoVolumeSource.attributeTypeMap;
    };
    V1GitRepoVolumeSource.discriminator = undefined;
    V1GitRepoVolumeSource.attributeTypeMap = [
        {
            "name": "directory",
            "baseName": "directory",
            "type": "string",
            "format": ""
        },
        {
            "name": "repository",
            "baseName": "repository",
            "type": "string",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        }
    ];
    return V1GitRepoVolumeSource;
}());
exports.V1GitRepoVolumeSource = V1GitRepoVolumeSource;
//# sourceMappingURL=V1GitRepoVolumeSource.js.map