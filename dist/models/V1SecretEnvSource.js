"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SecretEnvSource = void 0;
var V1SecretEnvSource = (function () {
    function V1SecretEnvSource() {
    }
    V1SecretEnvSource.getAttributeTypeMap = function () {
        return V1SecretEnvSource.attributeTypeMap;
    };
    V1SecretEnvSource.discriminator = undefined;
    V1SecretEnvSource.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        }
    ];
    return V1SecretEnvSource;
}());
exports.V1SecretEnvSource = V1SecretEnvSource;
//# sourceMappingURL=V1SecretEnvSource.js.map