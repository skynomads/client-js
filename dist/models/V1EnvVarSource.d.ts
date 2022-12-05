import { V1EnvVarSourceConfigMapKeyRef } from '../models/V1EnvVarSourceConfigMapKeyRef';
import { V1EnvVarSourceFieldRef } from '../models/V1EnvVarSourceFieldRef';
import { V1EnvVarSourceResourceFieldRef } from '../models/V1EnvVarSourceResourceFieldRef';
import { V1EnvVarSourceSecretKeyRef } from '../models/V1EnvVarSourceSecretKeyRef';
export declare class V1EnvVarSource {
    'configMapKeyRef'?: V1EnvVarSourceConfigMapKeyRef;
    'fieldRef'?: V1EnvVarSourceFieldRef;
    'resourceFieldRef'?: V1EnvVarSourceResourceFieldRef;
    'secretKeyRef'?: V1EnvVarSourceSecretKeyRef;
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
