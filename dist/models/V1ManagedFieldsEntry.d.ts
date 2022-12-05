import { V1ManagedFieldsOperationType } from '../models/V1ManagedFieldsOperationType';
export declare class V1ManagedFieldsEntry {
    'apiVersion'?: string;
    'fieldsType'?: string;
    'fieldsV1'?: any;
    'manager'?: string;
    'operation'?: V1ManagedFieldsOperationType;
    'subresource'?: string;
    'time'?: string;
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
