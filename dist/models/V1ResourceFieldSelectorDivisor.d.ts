export declare class V1ResourceFieldSelectorDivisor {
    'format'?: V1ResourceFieldSelectorDivisorFormatEnum;
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
export type V1ResourceFieldSelectorDivisorFormatEnum = "DecimalExponent" | "BinarySI" | "DecimalSI";
