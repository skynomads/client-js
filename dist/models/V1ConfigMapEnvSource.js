"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1ConfigMapEnvSource = void 0;
var V1ConfigMapEnvSource = (function () {
    function V1ConfigMapEnvSource() {
    }
    V1ConfigMapEnvSource.getAttributeTypeMap = function () {
        return V1ConfigMapEnvSource.attributeTypeMap;
    };
    V1ConfigMapEnvSource.discriminator = undefined;
    V1ConfigMapEnvSource.attributeTypeMap = [
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
    return V1ConfigMapEnvSource;
}());
exports.V1ConfigMapEnvSource = V1ConfigMapEnvSource;
//# sourceMappingURL=V1ConfigMapEnvSource.js.map