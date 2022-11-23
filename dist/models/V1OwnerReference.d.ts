export declare class V1OwnerReference {
    'apiVersion'?: string;
    'blockOwnerDeletion'?: boolean;
    'controller'?: boolean;
    'kind'?: string;
    'name'?: string;
    'uid'?: string;
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
