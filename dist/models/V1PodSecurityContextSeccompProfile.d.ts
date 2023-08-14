import { V1SeccompProfileType } from '../models/V1SeccompProfileType';
export declare class V1PodSecurityContextSeccompProfile {
    'localhostProfile'?: string;
    'type'?: V1SeccompProfileType;
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
