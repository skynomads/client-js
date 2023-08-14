import { ModelHistogramBucket } from '../models/ModelHistogramBucket';
export declare class ModelSampleHistogram {
    'buckets'?: Array<ModelHistogramBucket>;
    'count'?: number;
    'sum'?: number;
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
