import { V1CinderVolumeSourceSecretRef } from '../models/V1CinderVolumeSourceSecretRef';
export declare class V1CinderVolumeSource {
    'fsType'?: string;
    'readOnly'?: boolean;
    'secretRef'?: V1CinderVolumeSourceSecretRef;
    'volumeID'?: string;
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
