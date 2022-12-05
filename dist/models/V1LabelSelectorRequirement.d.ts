import { V1LabelSelectorOperator } from '../models/V1LabelSelectorOperator';
export declare class V1LabelSelectorRequirement {
    'key'?: string;
    'operator'?: V1LabelSelectorOperator;
    'values'?: Array<string>;
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
