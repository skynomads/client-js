import { V1PodFSGroupChangePolicy } from '../models/V1PodFSGroupChangePolicy';
import { V1PodSecurityContextSeLinuxOptions } from '../models/V1PodSecurityContextSeLinuxOptions';
import { V1PodSecurityContextSeccompProfile } from '../models/V1PodSecurityContextSeccompProfile';
import { V1PodSecurityContextWindowsOptions } from '../models/V1PodSecurityContextWindowsOptions';
import { V1Sysctl } from '../models/V1Sysctl';
export declare class V1PodSecurityContext {
    'fsGroup'?: number;
    'fsGroupChangePolicy'?: V1PodFSGroupChangePolicy;
    'runAsGroup'?: number;
    'runAsNonRoot'?: boolean;
    'runAsUser'?: number;
    'seLinuxOptions'?: V1PodSecurityContextSeLinuxOptions;
    'seccompProfile'?: V1PodSecurityContextSeccompProfile;
    'supplementalGroups'?: Array<number>;
    'sysctls'?: Array<V1Sysctl>;
    'windowsOptions'?: V1PodSecurityContextWindowsOptions;
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
