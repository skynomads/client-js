"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1ApplicationSpec = void 0;
var V1alpha1ApplicationSpec = (function () {
    function V1alpha1ApplicationSpec() {
    }
    V1alpha1ApplicationSpec.getAttributeTypeMap = function () {
        return V1alpha1ApplicationSpec.attributeTypeMap;
    };
    V1alpha1ApplicationSpec.discriminator = undefined;
    V1alpha1ApplicationSpec.attributeTypeMap = [
        {
            "name": "blockStorage",
            "baseName": "blockStorage",
            "type": "V1alpha1BlockStorage",
            "format": ""
        },
        {
            "name": "domains",
            "baseName": "domains",
            "type": "V1alpha1ApplicationSpecDomains",
            "format": ""
        },
        {
            "name": "instance",
            "baseName": "instance",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "string",
            "format": ""
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "any",
            "format": ""
        }
    ];
    return V1alpha1ApplicationSpec;
}());
exports.V1alpha1ApplicationSpec = V1alpha1ApplicationSpec;
//# sourceMappingURL=V1alpha1ApplicationSpec.js.map