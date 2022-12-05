import { V1EphemeralVolumeSourceVolumeClaimTemplate } from '../models/V1EphemeralVolumeSourceVolumeClaimTemplate';
export declare class V1EphemeralVolumeSource {
    'volumeClaimTemplate'?: V1EphemeralVolumeSourceVolumeClaimTemplate;
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
