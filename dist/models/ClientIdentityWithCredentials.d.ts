import { ClientIdentityWithCredentialsOidc } from '../models/ClientIdentityWithCredentialsOidc';
import { ClientIdentityWithCredentialsPassword } from '../models/ClientIdentityWithCredentialsPassword';
export declare class ClientIdentityWithCredentials {
    'oidc'?: ClientIdentityWithCredentialsOidc;
    'password'?: ClientIdentityWithCredentialsPassword;
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
