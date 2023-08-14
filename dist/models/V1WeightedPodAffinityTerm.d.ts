import { V1WeightedPodAffinityTermPodAffinityTerm } from '../models/V1WeightedPodAffinityTermPodAffinityTerm';
export declare class V1WeightedPodAffinityTerm {
    'podAffinityTerm'?: V1WeightedPodAffinityTermPodAffinityTerm;
    'weight'?: number;
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
