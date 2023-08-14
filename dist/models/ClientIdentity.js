"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIdentity = void 0;
var ClientIdentity = (function () {
    function ClientIdentity() {
    }
    ClientIdentity.getAttributeTypeMap = function () {
        return ClientIdentity.attributeTypeMap;
    };
    ClientIdentity.discriminator = undefined;
    ClientIdentity.attributeTypeMap = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "{ [key: string]: ClientIdentityCredentials; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadataAdmin",
            "baseName": "metadata_admin",
            "type": "any",
            "format": ""
        },
        {
            "name": "metadataPublic",
            "baseName": "metadata_public",
            "type": "any",
            "format": ""
        },
        {
            "name": "recoveryAddresses",
            "baseName": "recovery_addresses",
            "type": "Array<ClientRecoveryIdentityAddress>",
            "format": ""
        },
        {
            "name": "schemaId",
            "baseName": "schema_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaUrl",
            "baseName": "schema_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ClientIdentityState",
            "format": ""
        },
        {
            "name": "stateChangedAt",
            "baseName": "state_changed_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "verifiableAddresses",
            "baseName": "verifiable_addresses",
            "type": "Array<ClientVerifiableIdentityAddress>",
            "format": ""
        }
    ];
    return ClientIdentity;
}());
exports.ClientIdentity = ClientIdentity;
//# sourceMappingURL=ClientIdentity.js.map