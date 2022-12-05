import { V1CSIVolumeSourceNodePublishSecretRef } from '../models/V1CSIVolumeSourceNodePublishSecretRef';
export declare class V1VolumeCsi {
    'driver'?: string;
    'fsType'?: string;
    'nodePublishSecretRef'?: V1CSIVolumeSourceNodePublishSecretRef;
    'readOnly'?: boolean;
    'volumeAttributes'?: {
        [key: string]: string;
    };
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
