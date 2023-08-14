export declare class ClientVerifiableIdentityAddress {
    'createdAt'?: string;
    'id'?: string;
    'status'?: string;
    'updatedAt'?: string;
    'value'?: string;
    'verified'?: boolean;
    'verifiedAt'?: string;
    'via'?: string;
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
