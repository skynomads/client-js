import { K8sIoApimachineryPkgApisMetaV1ConditionStatus } from '../models/K8sIoApimachineryPkgApisMetaV1ConditionStatus';
export declare class V1Condition {
    'lastTransitionTime'?: string;
    'message'?: string;
    'observedGeneration'?: number;
    'reason'?: string;
    'status'?: K8sIoApimachineryPkgApisMetaV1ConditionStatus;
    'type'?: string;
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
