import { V1PodFailurePolicyOnExitCodesOperator } from '../models/V1PodFailurePolicyOnExitCodesOperator';
export declare class V1PodFailurePolicyRuleOnExitCodes {
    'containerName'?: string;
    'operator'?: V1PodFailurePolicyOnExitCodesOperator;
    'values'?: Array<number>;
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
