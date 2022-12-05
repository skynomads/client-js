import { V1EnvFromSourceConfigMapRef } from '../models/V1EnvFromSourceConfigMapRef';
import { V1EnvFromSourceSecretRef } from '../models/V1EnvFromSourceSecretRef';
export declare class V1EnvFromSource {
    'configMapRef'?: V1EnvFromSourceConfigMapRef;
    'prefix'?: string;
    'secretRef'?: V1EnvFromSourceSecretRef;
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
