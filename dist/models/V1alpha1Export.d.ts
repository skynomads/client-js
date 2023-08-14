import { V1alpha1ExportMetadata } from '../models/V1alpha1ExportMetadata';
import { V1alpha1ExportSpec } from '../models/V1alpha1ExportSpec';
import { V1alpha1ExportStatus } from '../models/V1alpha1ExportStatus';
export declare class V1alpha1Export {
    'apiVersion'?: string;
    'kind'?: string;
    'metadata'?: V1alpha1ExportMetadata;
    'spec'?: V1alpha1ExportSpec;
    'status'?: V1alpha1ExportStatus;
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
