export declare class V1EmptyDirVolumeSourceSizeLimit {
    'format'?: V1EmptyDirVolumeSourceSizeLimitFormatEnum;
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
export type V1EmptyDirVolumeSourceSizeLimitFormatEnum = "DecimalExponent" | "BinarySI" | "DecimalSI";
