"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1VolumeMount = void 0;
var V1VolumeMount = (function () {
    function V1VolumeMount() {
    }
    V1VolumeMount.getAttributeTypeMap = function () {
        return V1VolumeMount.attributeTypeMap;
    };
    V1VolumeMount.discriminator = undefined;
    V1VolumeMount.attributeTypeMap = [
        {
            "name": "mountPath",
            "baseName": "mountPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "mountPropagation",
            "baseName": "mountPropagation",
            "type": "V1MountPropagationMode",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "subPath",
            "baseName": "subPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "subPathExpr",
            "baseName": "subPathExpr",
            "type": "string",
            "format": ""
        }
    ];
    return V1VolumeMount;
}());
exports.V1VolumeMount = V1VolumeMount;
//# sourceMappingURL=V1VolumeMount.js.map