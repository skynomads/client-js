import { V1MountPropagationMode } from '../models/V1MountPropagationMode';
export declare class V1VolumeMount {
    'mountPath'?: string;
    'mountPropagation'?: V1MountPropagationMode;
    'name'?: string;
    'readOnly'?: boolean;
    'subPath'?: string;
    'subPathExpr'?: string;
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
