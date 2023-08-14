export declare class ResourceQuantity {
    'format'?: ResourceQuantityFormatEnum;
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
export type ResourceQuantityFormatEnum = "DecimalExponent" | "BinarySI" | "DecimalSI";
