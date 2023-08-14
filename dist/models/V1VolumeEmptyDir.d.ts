import { V1EmptyDirVolumeSourceSizeLimit } from '../models/V1EmptyDirVolumeSourceSizeLimit';
import { V1StorageMedium } from '../models/V1StorageMedium';
export declare class V1VolumeEmptyDir {
    'medium'?: V1StorageMedium;
    'sizeLimit'?: V1EmptyDirVolumeSourceSizeLimit;
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
