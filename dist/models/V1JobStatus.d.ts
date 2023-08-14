import { V1JobCondition } from '../models/V1JobCondition';
import { V1JobStatusUncountedTerminatedPods } from '../models/V1JobStatusUncountedTerminatedPods';
export declare class V1JobStatus {
    'active'?: number;
    'completedIndexes'?: string;
    'completionTime'?: string;
    'conditions'?: Array<V1JobCondition>;
    'failed'?: number;
    'ready'?: number;
    'startTime'?: string;
    'succeeded'?: number;
    'uncountedTerminatedPods'?: V1JobStatusUncountedTerminatedPods;
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
