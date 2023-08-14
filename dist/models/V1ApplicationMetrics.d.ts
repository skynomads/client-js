import { ModelSampleStream } from '../models/ModelSampleStream';
export declare class V1ApplicationMetrics {
    'bucket'?: Array<ModelSampleStream>;
    'cpu'?: Array<ModelSampleStream>;
    'memory'?: Array<ModelSampleStream>;
    'postgres'?: Array<ModelSampleStream>;
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
