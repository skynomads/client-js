import { V1AzureDataDiskCachingMode } from '../models/V1AzureDataDiskCachingMode';
import { V1AzureDataDiskKind } from '../models/V1AzureDataDiskKind';
export declare class V1AzureDiskVolumeSource {
    'cachingMode'?: V1AzureDataDiskCachingMode;
    'diskName'?: string;
    'diskURI'?: string;
    'fsType'?: string;
    'kind'?: V1AzureDataDiskKind;
    'readOnly'?: boolean;
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
