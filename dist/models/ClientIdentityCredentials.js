"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentityCredentials = void 0;
var ClientIdentityCredentials = (function () {
    function ClientIdentityCredentials() {
    }
    ClientIdentityCredentials.getAttributeTypeMap = function () {
        return ClientIdentityCredentials.attributeTypeMap;
    };
    ClientIdentityCredentials.discriminator = undefined;
    ClientIdentityCredentials.attributeTypeMap = [
        {
            "name": "config",
            "baseName": "config",
            "type": "any",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ClientIdentityCredentialsType",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": ""
        }
    ];
    return ClientIdentityCredentials;
}());
exports.ClientIdentityCredentials = ClientIdentityCredentials;
//# sourceMappingURL=ClientIdentityCredentials.js.map