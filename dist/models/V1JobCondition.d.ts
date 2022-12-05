import { K8sIoApiCoreV1ConditionStatus } from '../models/K8sIoApiCoreV1ConditionStatus';
import { V1JobConditionType } from '../models/V1JobConditionType';
export declare class V1JobCondition {
    'lastProbeTime'?: string;
    'lastTransitionTime'?: string;
    'message'?: string;
    'reason'?: string;
    'status'?: K8sIoApiCoreV1ConditionStatus;
    'type'?: V1JobConditionType;
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
