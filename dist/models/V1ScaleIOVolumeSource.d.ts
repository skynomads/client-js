import { V1ScaleIOVolumeSourceSecretRef } from '../models/V1ScaleIOVolumeSourceSecretRef';
export declare class V1ScaleIOVolumeSource {
    'fsType'?: string;
    'gateway'?: string;
    'protectionDomain'?: string;
    'readOnly'?: boolean;
    'secretRef'?: V1ScaleIOVolumeSourceSecretRef;
    'sslEnabled'?: boolean;
    'storageMode'?: string;
    'storagePool'?: string;
    'system'?: string;
    'volumeName'?: string;
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
