import { V1JSON } from '../models/V1JSON';
import { V1Job } from '../models/V1Job';
export declare class V1alpha1Job {
    'description'?: string;
    'parameters'?: V1JSON;
    'template'?: V1Job;
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
