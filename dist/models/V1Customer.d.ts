import { V1Address } from '../models/V1Address';
import { V1Invoice } from '../models/V1Invoice';
import { V1TaxID } from '../models/V1TaxID';
export declare class V1Customer {
    'address'?: V1Address;
    'balance'?: number;
    'defaultPaymentMethod'?: string;
    'email'?: string;
    'invoices'?: Array<V1Invoice>;
    'name'?: string;
    'taxID'?: V1TaxID;
    'vatRate'?: number;
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
