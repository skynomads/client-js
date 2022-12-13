import { V1Condition } from '../models/V1Condition';
export declare class V1alpha1ApplicationStatus {
    'conditions'?: Array<V1Condition>;
    'hosts'?: Array<string>;
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
