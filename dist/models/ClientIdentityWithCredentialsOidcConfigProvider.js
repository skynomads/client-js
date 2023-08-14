"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityWithCredentialsOidcConfigProvider = void 0;
var ClientIdentityWithCredentialsOidcConfigProvider = (function () {
    function ClientIdentityWithCredentialsOidcConfigProvider() {
    }
    ClientIdentityWithCredentialsOidcConfigProvider.getAttributeTypeMap = function () {
        return ClientIdentityWithCredentialsOidcConfigProvider.attributeTypeMap;
    };
    ClientIdentityWithCredentialsOidcConfigProvider.discriminator = undefined;
    ClientIdentityWithCredentialsOidcConfigProvider.attributeTypeMap = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }
    ];
    return ClientIdentityWithCredentialsOidcConfigProvider;
}());
exports.ClientIdentityWithCredentialsOidcConfigProvider = ClientIdentityWithCredentialsOidcConfigProvider;
//# sourceMappingURL=ClientIdentityWithCredentialsOidcConfigProvider.js.map