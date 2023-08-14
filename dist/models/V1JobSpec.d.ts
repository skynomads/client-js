import { V1CompletionMode } from '../models/V1CompletionMode';
import { V1JobSpecPodFailurePolicy } from '../models/V1JobSpecPodFailurePolicy';
import { V1JobSpecSelector } from '../models/V1JobSpecSelector';
import { V1JobSpecTemplate } from '../models/V1JobSpecTemplate';
export declare class V1JobSpec {
    'activeDeadlineSeconds'?: number;
    'backoffLimit'?: number;
    'completionMode'?: V1CompletionMode;
    'completions'?: number;
    'manualSelector'?: boolean;
    'parallelism'?: number;
    'podFailurePolicy'?: V1JobSpecPodFailurePolicy;
    'selector'?: V1JobSpecSelector;
    'suspend'?: boolean;
    'template'?: V1JobSpecTemplate;
    'ttlSecondsAfterFinished'?: number;
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
