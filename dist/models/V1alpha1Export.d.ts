import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1OwnerReference } from '../models/V1OwnerReference';
import { V1alpha1ExportSpec } from '../models/V1alpha1ExportSpec';
import { V1alpha1ExportStatus } from '../models/V1alpha1ExportStatus';
export declare class V1alpha1Export {
    'annotations'?: {
        [key: string]: string;
    };
    'apiVersion'?: string;
    'creationTimestamp'?: string;
    'deletionGracePeriodSeconds'?: number;
    'deletionTimestamp'?: string;
    'finalizers'?: Array<string>;
    'generateName'?: string;
    'generation'?: number;
    'kind'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'managedFields'?: Array<V1ManagedFieldsEntry>;
    'name'?: string;
    'namespace'?: string;
    'ownerReferences'?: Array<V1OwnerReference>;
    'resourceVersion'?: string;
    'selfLink'?: string;
    'spec'?: V1alpha1ExportSpec;
    'status'?: V1alpha1ExportStatus;
    'uid'?: string;
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
