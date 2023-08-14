import { StripePaymentMethodType } from '../models/StripePaymentMethodType';
export declare class V1PaymentMethod {
    'id'?: string;
    'isDefault'?: boolean;
    'number'?: string;
    'subtype'?: string;
    'type'?: StripePaymentMethodType;
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
