import { V1StorageOSVolumeSourceSecretRef } from '../models/V1StorageOSVolumeSourceSecretRef';
export declare class V1VolumeStorageos {
    'fsType'?: string;
    'readOnly'?: boolean;
    'secretRef'?: V1StorageOSVolumeSourceSecretRef;
    'volumeName'?: string;
    'volumeNamespace'?: string;
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
