"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRecoveryIdentityAddress = void 0;
var ClientRecoveryIdentityAddress = (function () {
    function ClientRecoveryIdentityAddress() {
    }
    ClientRecoveryIdentityAddress.getAttributeTypeMap = function () {
        return ClientRecoveryIdentityAddress.attributeTypeMap;
    };
    ClientRecoveryIdentityAddress.discriminator = undefined;
    ClientRecoveryIdentityAddress.attributeTypeMap = [
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
            "name": "via",
            "baseName": "via",
            "type": "string",
            "format": ""
        }
    ];
    return ClientRecoveryIdentityAddress;
}());
exports.ClientRecoveryIdentityAddress = ClientRecoveryIdentityAddress;
//# sourceMappingURL=ClientRecoveryIdentityAddress.js.map