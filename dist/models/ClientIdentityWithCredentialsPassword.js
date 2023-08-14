"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityWithCredentialsPassword = void 0;
var ClientIdentityWithCredentialsPassword = (function () {
    function ClientIdentityWithCredentialsPassword() {
    }
    ClientIdentityWithCredentialsPassword.getAttributeTypeMap = function () {
        return ClientIdentityWithCredentialsPassword.attributeTypeMap;
    };
    ClientIdentityWithCredentialsPassword.discriminator = undefined;
    ClientIdentityWithCredentialsPassword.attributeTypeMap = [
        {
            "name": "config",
            "baseName": "config",
            "type": "ClientIdentityWithCredentialsPasswordConfig",
            "format": ""
        }
    ];
    return ClientIdentityWithCredentialsPassword;
}());
exports.ClientIdentityWithCredentialsPassword = ClientIdentityWithCredentialsPassword;
//# sourceMappingURL=ClientIdentityWithCredentialsPassword.js.map