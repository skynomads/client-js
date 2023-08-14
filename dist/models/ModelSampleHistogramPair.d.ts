import { ModelSampleHistogramPairHistogram } from '../models/ModelSampleHistogramPairHistogram';
export declare class ModelSampleHistogramPair {
    'histogram'?: ModelSampleHistogramPairHistogram;
    'timestamp'?: string;
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
