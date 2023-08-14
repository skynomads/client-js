import { V1Customer } from '../models/V1Customer';
import { V1PaymentMethod } from '../models/V1PaymentMethod';
export declare class V1Account {
    'customer'?: V1Customer;
    'paymentMethods'?: Array<V1PaymentMethod>;
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
