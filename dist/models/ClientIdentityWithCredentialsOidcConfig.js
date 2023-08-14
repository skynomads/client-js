"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityWithCredentialsOidcConfig = void 0;
var ClientIdentityWithCredentialsOidcConfig = (function () {
    function ClientIdentityWithCredentialsOidcConfig() {
    }
    ClientIdentityWithCredentialsOidcConfig.getAttributeTypeMap = function () {
        return ClientIdentityWithCredentialsOidcConfig.attributeTypeMap;
    };
    ClientIdentityWithCredentialsOidcConfig.discriminator = undefined;
    ClientIdentityWithCredentialsOidcConfig.attributeTypeMap = [
        {
            "name": "config",
            "baseName": "config",
            "type": "ClientIdentityWithCredentialsPasswordConfig",
            "format": ""
        },
        {
            "name": "providers",
            "baseName": "providers",
            "type": "Array<ClientIdentityWithCredentialsOidcConfigProvider>",
            "format": ""
        }
    ];
    return ClientIdentityWithCredentialsOidcConfig;
}());
exports.ClientIdentityWithCredentialsOidcConfig = ClientIdentityWithCredentialsOidcConfig;
//# sourceMappingURL=ClientIdentityWithCredentialsOidcConfig.js.map