export declare class V1PersistentVolumeClaimSpecDataSourceRef {
    'apiGroup'?: string;
    'kind'?: string;
    'name'?: string;
    'namespace'?: string;
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
