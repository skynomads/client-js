import { K8sIoApiCoreV1ConditionStatus } from '../models/K8sIoApiCoreV1ConditionStatus';
import { V1PodConditionType } from '../models/V1PodConditionType';
export declare class V1PodFailurePolicyOnPodConditionsPattern {
    'status'?: K8sIoApiCoreV1ConditionStatus;
    'type'?: V1PodConditionType;
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
