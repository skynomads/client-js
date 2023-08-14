export declare class ClientRecoveryIdentityAddress {
    'createdAt'?: string;
    'id'?: string;
    'updatedAt'?: string;
    'value'?: string;
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
