import { V1FlexVolumeSourceSecretRef } from '../models/V1FlexVolumeSourceSecretRef';
export declare class V1VolumeFlexVolume {
    'driver'?: string;
    'fsType'?: string;
    'options'?: {
        [key: string]: string;
    };
    'readOnly'?: boolean;
    'secretRef'?: V1FlexVolumeSourceSecretRef;
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
