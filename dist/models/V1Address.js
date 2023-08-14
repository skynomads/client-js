"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Address = void 0;
var V1Address = (function () {
    function V1Address() {
    }
    V1Address.getAttributeTypeMap = function () {
        return V1Address.attributeTypeMap;
    };
    V1Address.discriminator = undefined;
    V1Address.attributeTypeMap = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }
    ];
    return V1Address;
}());
exports.V1Address = V1Address;
//# sourceMappingURL=V1Address.js.map