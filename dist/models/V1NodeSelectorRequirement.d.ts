import { V1NodeSelectorOperator } from '../models/V1NodeSelectorOperator';
export declare class V1NodeSelectorRequirement {
    'key'?: string;
    'operator'?: V1NodeSelectorOperator;
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
