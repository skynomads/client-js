import { V1KeyToPath } from '../models/V1KeyToPath';
export declare class V1SecretVolumeSource {
    'defaultMode'?: number;
    'items'?: Array<V1KeyToPath>;
    'optional'?: boolean;
    'secretName'?: string;
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
