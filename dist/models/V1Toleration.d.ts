import { V1TaintEffect } from '../models/V1TaintEffect';
import { V1TolerationOperator } from '../models/V1TolerationOperator';
export declare class V1Toleration {
    'effect'?: V1TaintEffect;
    'key'?: string;
    'operator'?: V1TolerationOperator;
    'tolerationSeconds'?: number;
    'value'?: string;
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
