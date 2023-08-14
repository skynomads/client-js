import { ClientIdentityWithCredentialsOidcConfig } from '../models/ClientIdentityWithCredentialsOidcConfig';
export declare class ClientIdentityWithCredentialsOidc {
    'config'?: ClientIdentityWithCredentialsOidcConfig;
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
