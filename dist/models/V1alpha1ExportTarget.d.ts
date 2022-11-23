import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry.js';
import { V1OwnerReference } from '../models/V1OwnerReference.js';
import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec.js';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus.js';
export declare class V1alpha1ExportTarget {
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
    'spec'?: V1alpha1ExportTargetSpec;
    'status'?: V1alpha1ExportTargetStatus;
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
