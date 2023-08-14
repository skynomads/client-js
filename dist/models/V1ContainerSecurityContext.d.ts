import { V1ProcMountType } from '../models/V1ProcMountType';
import { V1SecurityContextCapabilities } from '../models/V1SecurityContextCapabilities';
import { V1SecurityContextSeLinuxOptions } from '../models/V1SecurityContextSeLinuxOptions';
import { V1SecurityContextSeccompProfile } from '../models/V1SecurityContextSeccompProfile';
import { V1SecurityContextWindowsOptions } from '../models/V1SecurityContextWindowsOptions';
export declare class V1ContainerSecurityContext {
    'allowPrivilegeEscalation'?: boolean;
    'capabilities'?: V1SecurityContextCapabilities;
    'privileged'?: boolean;
    'procMount'?: V1ProcMountType;
    'readOnlyRootFilesystem'?: boolean;
    'runAsGroup'?: number;
    'runAsNonRoot'?: boolean;
    'runAsUser'?: number;
    'seLinuxOptions'?: V1SecurityContextSeLinuxOptions;
    'seccompProfile'?: V1SecurityContextSeccompProfile;
    'windowsOptions'?: V1SecurityContextWindowsOptions;
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
