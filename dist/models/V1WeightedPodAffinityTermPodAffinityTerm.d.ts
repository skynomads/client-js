import { V1PodAffinityTermLabelSelector } from '../models/V1PodAffinityTermLabelSelector';
import { V1PodAffinityTermNamespaceSelector } from '../models/V1PodAffinityTermNamespaceSelector';
export declare class V1WeightedPodAffinityTermPodAffinityTerm {
    'labelSelector'?: V1PodAffinityTermLabelSelector;
    'namespaceSelector'?: V1PodAffinityTermNamespaceSelector;
    'namespaces'?: Array<string>;
    'topologyKey'?: string;
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
