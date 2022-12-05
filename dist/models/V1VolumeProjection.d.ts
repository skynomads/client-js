import { V1VolumeProjectionConfigMap } from '../models/V1VolumeProjectionConfigMap';
import { V1VolumeProjectionDownwardAPI } from '../models/V1VolumeProjectionDownwardAPI';
import { V1VolumeProjectionSecret } from '../models/V1VolumeProjectionSecret';
import { V1VolumeProjectionServiceAccountToken } from '../models/V1VolumeProjectionServiceAccountToken';
export declare class V1VolumeProjection {
    'configMap'?: V1VolumeProjectionConfigMap;
    'downwardAPI'?: V1VolumeProjectionDownwardAPI;
    'secret'?: V1VolumeProjectionSecret;
    'serviceAccountToken'?: V1VolumeProjectionServiceAccountToken;
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
