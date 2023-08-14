export declare class V1QuobyteVolumeSource {
    'group'?: string;
    'readOnly'?: boolean;
    'registry'?: string;
    'tenant'?: string;
    'user'?: string;
    'volume'?: string;
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
