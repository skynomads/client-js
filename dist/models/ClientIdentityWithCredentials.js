"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityWithCredentials = void 0;
var ClientIdentityWithCredentials = (function () {
    function ClientIdentityWithCredentials() {
    }
    ClientIdentityWithCredentials.getAttributeTypeMap = function () {
        return ClientIdentityWithCredentials.attributeTypeMap;
    };
    ClientIdentityWithCredentials.discriminator = undefined;
    ClientIdentityWithCredentials.attributeTypeMap = [
        {
            "name": "oidc",
            "baseName": "oidc",
            "type": "ClientIdentityWithCredentialsOidc",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "ClientIdentityWithCredentialsPassword",
            "format": ""
        }
    ];
    return ClientIdentityWithCredentials;
}());
exports.ClientIdentityWithCredentials = ClientIdentityWithCredentials;
//# sourceMappingURL=ClientIdentityWithCredentials.js.map