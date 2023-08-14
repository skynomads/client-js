import { StripeInvoiceStatus } from '../models/StripeInvoiceStatus';
export declare class V1Invoice {
    'amountDue'?: number;
    'amountRemaining'?: number;
    'created'?: number;
    'dueDate'?: number;
    'hostedInvoiceURL'?: string;
    'id'?: string;
    'invoicePDF'?: string;
    'number'?: string;
    'periodEnd'?: number;
    'periodStart'?: number;
    'status'?: StripeInvoiceStatus;
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
