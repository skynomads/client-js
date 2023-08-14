import { V1PodFailurePolicyRule } from '../models/V1PodFailurePolicyRule';
export declare class V1JobSpecPodFailurePolicy {
    'rules'?: Array<V1PodFailurePolicyRule>;
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
