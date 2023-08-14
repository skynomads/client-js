import { V1CephFSVolumeSourceSecretRef } from '../models/V1CephFSVolumeSourceSecretRef';
export declare class V1VolumeCephfs {
    'monitors'?: Array<string>;
    'path'?: string;
    'readOnly'?: boolean;
    'secretFile'?: string;
    'secretRef'?: V1CephFSVolumeSourceSecretRef;
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
