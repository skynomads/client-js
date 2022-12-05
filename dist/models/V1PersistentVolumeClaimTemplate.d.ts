import { V1PersistentVolumeClaimTemplateMetadata } from '../models/V1PersistentVolumeClaimTemplateMetadata';
import { V1PersistentVolumeClaimTemplateSpec } from '../models/V1PersistentVolumeClaimTemplateSpec';
export declare class V1PersistentVolumeClaimTemplate {
    'metadata'?: V1PersistentVolumeClaimTemplateMetadata;
    'spec'?: V1PersistentVolumeClaimTemplateSpec;
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
