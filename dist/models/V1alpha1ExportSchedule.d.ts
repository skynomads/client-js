import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha1ExportScheduleSpec } from '../models/V1alpha1ExportScheduleSpec';
import { V1alpha1ExportScheduleStatus } from '../models/V1alpha1ExportScheduleStatus';
export declare class V1alpha1ExportSchedule {
    'apiVersion'?: string;
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1alpha1ExportScheduleSpec;
    'status'?: V1alpha1ExportScheduleStatus;
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
