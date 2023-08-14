import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus';
export declare class V1alpha1ExportTarget {
    'apiVersion'?: string;
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1alpha1ExportTargetSpec;
    'status'?: V1alpha1ExportTargetStatus;
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
