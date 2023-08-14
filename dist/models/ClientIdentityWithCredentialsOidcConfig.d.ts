import { ClientIdentityWithCredentialsOidcConfigProvider } from '../models/ClientIdentityWithCredentialsOidcConfigProvider';
import { ClientIdentityWithCredentialsPasswordConfig } from '../models/ClientIdentityWithCredentialsPasswordConfig';
export declare class ClientIdentityWithCredentialsOidcConfig {
    'config'?: ClientIdentityWithCredentialsPasswordConfig;
    'providers'?: Array<ClientIdentityWithCredentialsOidcConfigProvider>;
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
