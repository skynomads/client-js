import { V1alpha1ExportBucket } from '../models/V1alpha1ExportBucket';
export declare class V1alpha1ExportTargetSpec {
    'bucket'?: V1alpha1ExportBucket;
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
