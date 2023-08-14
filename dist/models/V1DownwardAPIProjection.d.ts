import { V1DownwardAPIVolumeFile } from '../models/V1DownwardAPIVolumeFile';
export declare class V1DownwardAPIProjection {
    'items'?: Array<V1DownwardAPIVolumeFile>;
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
