import { V1PodResourceClaimSource } from '../models/V1PodResourceClaimSource';
export declare class V1PodResourceClaim {
    'name'?: string;
    'source'?: V1PodResourceClaimSource;
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
