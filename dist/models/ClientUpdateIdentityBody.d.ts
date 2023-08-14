import { ClientIdentityState } from '../models/ClientIdentityState';
import { ClientIdentityWithCredentials } from '../models/ClientIdentityWithCredentials';
export declare class ClientUpdateIdentityBody {
    'credentials'?: ClientIdentityWithCredentials;
    'metadataAdmin'?: any;
    'metadataPublic'?: any;
    'schemaId'?: string;
    'state'?: ClientIdentityState;
    'traits'?: any;
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
