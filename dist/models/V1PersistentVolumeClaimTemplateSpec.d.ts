import { V1PersistentVolumeAccessMode } from '../models/V1PersistentVolumeAccessMode';
import { V1PersistentVolumeClaimSpecDataSource } from '../models/V1PersistentVolumeClaimSpecDataSource';
import { V1PersistentVolumeClaimSpecDataSourceRef } from '../models/V1PersistentVolumeClaimSpecDataSourceRef';
import { V1PersistentVolumeClaimSpecResources } from '../models/V1PersistentVolumeClaimSpecResources';
import { V1PersistentVolumeClaimSpecSelector } from '../models/V1PersistentVolumeClaimSpecSelector';
import { V1PersistentVolumeMode } from '../models/V1PersistentVolumeMode';
export declare class V1PersistentVolumeClaimTemplateSpec {
    'accessModes'?: Array<V1PersistentVolumeAccessMode>;
    'dataSource'?: V1PersistentVolumeClaimSpecDataSource;
    'dataSourceRef'?: V1PersistentVolumeClaimSpecDataSourceRef;
    'resources'?: V1PersistentVolumeClaimSpecResources;
    'selector'?: V1PersistentVolumeClaimSpecSelector;
    'storageClassName'?: string;
    'volumeMode'?: V1PersistentVolumeMode;
    'volumeName'?: string;
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
