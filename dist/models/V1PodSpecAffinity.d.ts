import { V1AffinityNodeAffinity } from '../models/V1AffinityNodeAffinity';
import { V1AffinityPodAffinity } from '../models/V1AffinityPodAffinity';
import { V1AffinityPodAntiAffinity } from '../models/V1AffinityPodAntiAffinity';
export declare class V1PodSpecAffinity {
    'nodeAffinity'?: V1AffinityNodeAffinity;
    'podAffinity'?: V1AffinityPodAffinity;
    'podAntiAffinity'?: V1AffinityPodAntiAffinity;
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
