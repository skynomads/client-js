"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeGitRepo = void 0;
var V1VolumeGitRepo = (function () {
    function V1VolumeGitRepo() {
    }
    V1VolumeGitRepo.getAttributeTypeMap = function () {
        return V1VolumeGitRepo.attributeTypeMap;
    };
    V1VolumeGitRepo.discriminator = undefined;
    V1VolumeGitRepo.attributeTypeMap = [
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
    return V1VolumeGitRepo;
}());
exports.V1VolumeGitRepo = V1VolumeGitRepo;
//# sourceMappingURL=V1VolumeGitRepo.js.map