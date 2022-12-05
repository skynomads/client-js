import { V1NodeSelectorRequirement } from '../models/V1NodeSelectorRequirement';
export declare class V1PreferredSchedulingTermPreference {
    'matchExpressions'?: Array<V1NodeSelectorRequirement>;
    'matchFields'?: Array<V1NodeSelectorRequirement>;
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
