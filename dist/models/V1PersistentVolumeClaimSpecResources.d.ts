import { ResourceQuantity } from '../models/ResourceQuantity';
import { V1ResourceClaim } from '../models/V1ResourceClaim';
export declare class V1PersistentVolumeClaimSpecResources {
    'claims'?: Array<V1ResourceClaim>;
    'limits'?: {
        [key: string]: ResourceQuantity;
    };
    'requests'?: {
        [key: string]: ResourceQuantity;
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
