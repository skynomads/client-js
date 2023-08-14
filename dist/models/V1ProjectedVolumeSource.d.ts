import { V1VolumeProjection } from '../models/V1VolumeProjection';
export declare class V1ProjectedVolumeSource {
    'defaultMode'?: number;
    'sources'?: Array<V1VolumeProjection>;
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
