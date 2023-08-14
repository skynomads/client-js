import { ModelSampleHistogramPair } from '../models/ModelSampleHistogramPair';
import { ModelSamplePair } from '../models/ModelSamplePair';
export declare class ModelSampleStream {
    'histograms'?: Array<ModelSampleHistogramPair>;
    'metric'?: {
        [key: string]: string;
    };
    'values'?: Array<ModelSamplePair>;
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
