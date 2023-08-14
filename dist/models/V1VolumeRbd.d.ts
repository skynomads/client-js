import { V1RBDVolumeSourceSecretRef } from '../models/V1RBDVolumeSourceSecretRef';
export declare class V1VolumeRbd {
    'fsType'?: string;
    'image'?: string;
    'keyring'?: string;
    'monitors'?: Array<string>;
    'pool'?: string;
    'readOnly'?: boolean;
    'secretRef'?: V1RBDVolumeSourceSecretRef;
    'user'?: string;
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
