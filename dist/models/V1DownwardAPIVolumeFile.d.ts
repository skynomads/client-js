import { V1DownwardAPIVolumeFileFieldRef } from '../models/V1DownwardAPIVolumeFileFieldRef';
import { V1DownwardAPIVolumeFileResourceFieldRef } from '../models/V1DownwardAPIVolumeFileResourceFieldRef';
export declare class V1DownwardAPIVolumeFile {
    'fieldRef'?: V1DownwardAPIVolumeFileFieldRef;
    'mode'?: number;
    'path'?: string;
    'resourceFieldRef'?: V1DownwardAPIVolumeFileResourceFieldRef;
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
