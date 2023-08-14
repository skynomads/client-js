import { V1PodFailurePolicyAction } from '../models/V1PodFailurePolicyAction';
import { V1PodFailurePolicyOnPodConditionsPattern } from '../models/V1PodFailurePolicyOnPodConditionsPattern';
import { V1PodFailurePolicyRuleOnExitCodes } from '../models/V1PodFailurePolicyRuleOnExitCodes';
export declare class V1PodFailurePolicyRule {
    'action'?: V1PodFailurePolicyAction;
    'onExitCodes'?: V1PodFailurePolicyRuleOnExitCodes;
    'onPodConditions'?: Array<V1PodFailurePolicyOnPodConditionsPattern>;
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
