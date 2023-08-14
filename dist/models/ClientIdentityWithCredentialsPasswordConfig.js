"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityWithCredentialsPasswordConfig = void 0;
var ClientIdentityWithCredentialsPasswordConfig = (function () {
    function ClientIdentityWithCredentialsPasswordConfig() {
    }
    ClientIdentityWithCredentialsPasswordConfig.getAttributeTypeMap = function () {
        return ClientIdentityWithCredentialsPasswordConfig.attributeTypeMap;
    };
    ClientIdentityWithCredentialsPasswordConfig.discriminator = undefined;
    ClientIdentityWithCredentialsPasswordConfig.attributeTypeMap = [
        {
            "name": "hashedPassword",
            "baseName": "hashed_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }
    ];
    return ClientIdentityWithCredentialsPasswordConfig;
}());
exports.ClientIdentityWithCredentialsPasswordConfig = ClientIdentityWithCredentialsPasswordConfig;
//# sourceMappingURL=ClientIdentityWithCredentialsPasswordConfig.js.map