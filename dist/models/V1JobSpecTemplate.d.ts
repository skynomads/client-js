import { V1JobMetadata } from '../models/V1JobMetadata';
import { V1PodTemplateSpecSpec } from '../models/V1PodTemplateSpecSpec';
export declare class V1JobSpecTemplate {
    'metadata'?: V1JobMetadata;
    'spec'?: V1PodTemplateSpecSpec;
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
