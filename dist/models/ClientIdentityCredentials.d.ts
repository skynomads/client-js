import { ClientIdentityCredentialsType } from '../models/ClientIdentityCredentialsType';
export declare class ClientIdentityCredentials {
    'config'?: any;
    'createdAt'?: string;
    'identifiers'?: Array<string>;
    'type'?: ClientIdentityCredentialsType;
    'updatedAt'?: string;
    'version'?: number;
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
