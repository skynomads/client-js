import { V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution } from '../models/V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution';
import { V1PreferredSchedulingTerm } from '../models/V1PreferredSchedulingTerm';
export declare class V1NodeAffinity {
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<V1PreferredSchedulingTerm>;
    'requiredDuringSchedulingIgnoredDuringExecution'?: V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
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
