import { V1ResourceFieldSelectorDivisor } from '../models/V1ResourceFieldSelectorDivisor';
export declare class V1DownwardAPIVolumeFileResourceFieldRef {
    'containerName'?: string;
    'divisor'?: V1ResourceFieldSelectorDivisor;
    'resource'?: string;
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
