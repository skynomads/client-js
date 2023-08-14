"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientVerifiableIdentityAddress = void 0;
var ClientVerifiableIdentityAddress = (function () {
    function ClientVerifiableIdentityAddress() {
    }
    ClientVerifiableIdentityAddress.getAttributeTypeMap = function () {
        return ClientVerifiableIdentityAddress.attributeTypeMap;
    };
    ClientVerifiableIdentityAddress.discriminator = undefined;
    ClientVerifiableIdentityAddress.attributeTypeMap = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "verifiedAt",
            "baseName": "verified_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "via",
            "baseName": "via",
            "type": "string",
            "format": ""
        }
    ];
    return ClientVerifiableIdentityAddress;
}());
exports.ClientVerifiableIdentityAddress = ClientVerifiableIdentityAddress;
//# sourceMappingURL=ClientVerifiableIdentityAddress.js.map