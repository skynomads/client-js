import { V1alpha1Export } from '../models/V1alpha1Export';
export declare class V1alpha1ExportScheduleSpec {
    'schedule'?: string;
    'template'?: V1alpha1Export;
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
