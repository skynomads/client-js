import { V1JobMetadata } from '../models/V1JobMetadata';
import { V1JobSpec } from '../models/V1JobSpec';
import { V1JobStatus } from '../models/V1JobStatus';
export declare class V1Job {
    'apiVersion'?: string;
    'kind'?: string;
    'metadata'?: V1JobMetadata;
    'spec'?: V1JobSpec;
    'status'?: V1JobStatus;
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
