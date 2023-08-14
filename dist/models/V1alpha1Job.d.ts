import { V1Job } from '../models/V1Job';
export declare class V1alpha1Job {
    'description'?: string;
    'name'?: string;
    'parameters'?: any;
    'template'?: V1Job;
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
