import { ClientIdentityWithCredentialsPasswordConfig } from '../models/ClientIdentityWithCredentialsPasswordConfig';
export declare class ClientIdentityWithCredentialsPassword {
    'config'?: ClientIdentityWithCredentialsPasswordConfig;
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
