import { StripeTaxIDType } from '../models/StripeTaxIDType';
export declare class V1TaxID {
    'type'?: StripeTaxIDType;
    'value'?: string;
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
