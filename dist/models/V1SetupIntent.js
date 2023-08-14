"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1SetupIntent = void 0;
var V1SetupIntent = (function () {
    function V1SetupIntent() {
    }
    V1SetupIntent.getAttributeTypeMap = function () {
        return V1SetupIntent.attributeTypeMap;
    };
    V1SetupIntent.discriminator = undefined;
    V1SetupIntent.attributeTypeMap = [
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        }
    ];
    return V1SetupIntent;
}());
exports.V1SetupIntent = V1SetupIntent;
//# sourceMappingURL=V1SetupIntent.js.map