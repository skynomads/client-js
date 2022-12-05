import { V1KeyToPath } from '../models/V1KeyToPath';
export declare class V1VolumeConfigMap {
    'defaultMode'?: number;
    'items'?: Array<V1KeyToPath>;
    'name'?: string;
    'optional'?: boolean;
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
