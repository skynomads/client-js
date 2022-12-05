import { V1PodAffinityTerm } from '../models/V1PodAffinityTerm';
import { V1WeightedPodAffinityTerm } from '../models/V1WeightedPodAffinityTerm';
export declare class V1AffinityPodAffinity {
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<V1WeightedPodAffinityTerm>;
    'requiredDuringSchedulingIgnoredDuringExecution'?: Array<V1PodAffinityTerm>;
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
