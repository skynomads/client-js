export declare class V1alpha1ExportBucket {
    'accessKey'?: string;
    'endpoint'?: string;
    'name'?: string;
    'region'?: string;
    'secretKey'?: string;
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
