import { V1ISCSIVolumeSourceSecretRef } from '../models/V1ISCSIVolumeSourceSecretRef';
export declare class V1ISCSIVolumeSource {
    'chapAuthDiscovery'?: boolean;
    'chapAuthSession'?: boolean;
    'fsType'?: string;
    'initiatorName'?: string;
    'iqn'?: string;
    'iscsiInterface'?: string;
    'lun'?: number;
    'portals'?: Array<string>;
    'readOnly'?: boolean;
    'secretRef'?: V1ISCSIVolumeSourceSecretRef;
    'targetPortal'?: string;
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
