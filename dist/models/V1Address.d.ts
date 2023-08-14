export declare class V1Address {
    'city'?: string;
    'country'?: string;
    'line1'?: string;
    'line2'?: string;
    'postalCode'?: string;
    'state'?: string;
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
