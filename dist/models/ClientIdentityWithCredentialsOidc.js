"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityWithCredentialsOidc = void 0;
var ClientIdentityWithCredentialsOidc = (function () {
    function ClientIdentityWithCredentialsOidc() {
    }
    ClientIdentityWithCredentialsOidc.getAttributeTypeMap = function () {
        return ClientIdentityWithCredentialsOidc.attributeTypeMap;
    };
    ClientIdentityWithCredentialsOidc.discriminator = undefined;
    ClientIdentityWithCredentialsOidc.attributeTypeMap = [
        {
            "name": "config",
            "baseName": "config",
            "type": "ClientIdentityWithCredentialsOidcConfig",
            "format": ""
        }
    ];
    return ClientIdentityWithCredentialsOidc;
}());
exports.ClientIdentityWithCredentialsOidc = ClientIdentityWithCredentialsOidc;
//# sourceMappingURL=ClientIdentityWithCredentialsOidc.js.map