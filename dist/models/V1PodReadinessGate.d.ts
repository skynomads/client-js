import { V1PodConditionType } from '../models/V1PodConditionType';
export declare class V1PodReadinessGate {
    'conditionType'?: V1PodConditionType;
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
