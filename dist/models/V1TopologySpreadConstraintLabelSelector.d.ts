import { V1LabelSelectorRequirement } from '../models/V1LabelSelectorRequirement';
export declare class V1TopologySpreadConstraintLabelSelector {
    'matchExpressions'?: Array<V1LabelSelectorRequirement>;
    'matchLabels'?: {
        [key: string]: string;
    };
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
