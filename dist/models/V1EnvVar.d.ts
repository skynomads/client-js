import { V1EnvVarValueFrom } from '../models/V1EnvVarValueFrom';
export declare class V1EnvVar {
    'name'?: string;
    'value'?: string;
    'valueFrom'?: V1EnvVarValueFrom;
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
