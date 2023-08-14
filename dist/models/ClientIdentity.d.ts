import { ClientIdentityCredentials } from '../models/ClientIdentityCredentials';
import { ClientIdentityState } from '../models/ClientIdentityState';
import { ClientRecoveryIdentityAddress } from '../models/ClientRecoveryIdentityAddress';
import { ClientVerifiableIdentityAddress } from '../models/ClientVerifiableIdentityAddress';
export declare class ClientIdentity {
    'createdAt'?: string;
    'credentials'?: {
        [key: string]: ClientIdentityCredentials;
    };
    'id'?: string;
    'metadataAdmin'?: any;
    'metadataPublic'?: any;
    'recoveryAddresses'?: Array<ClientRecoveryIdentityAddress>;
    'schemaId'?: string;
    'schemaUrl'?: string;
    'state'?: ClientIdentityState;
    'stateChangedAt'?: string;
    'traits'?: any;
    'updatedAt'?: string;
    'verifiableAddresses'?: Array<ClientVerifiableIdentityAddress>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
