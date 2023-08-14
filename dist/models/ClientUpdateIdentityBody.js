"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateIdentityBody = void 0;
var ClientUpdateIdentityBody = (function () {
    function ClientUpdateIdentityBody() {
    }
    ClientUpdateIdentityBody.getAttributeTypeMap = function () {
        return ClientUpdateIdentityBody.attributeTypeMap;
    };
    ClientUpdateIdentityBody.discriminator = undefined;
    ClientUpdateIdentityBody.attributeTypeMap = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "ClientIdentityWithCredentials",
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
            "name": "schemaId",
            "baseName": "schema_id",
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
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        }
    ];
    return ClientUpdateIdentityBody;
}());
exports.ClientUpdateIdentityBody = ClientUpdateIdentityBody;
//# sourceMappingURL=ClientUpdateIdentityBody.js.map