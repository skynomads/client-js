import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1OwnerReference } from '../models/V1OwnerReference';
export declare class V1alpha1ExportMetadata {
    'annotations'?: {
        [key: string]: string;
    };
    'creationTimestamp'?: string;
    'deletionGracePeriodSeconds'?: number;
    'deletionTimestamp'?: string;
    'finalizers'?: Array<string>;
    'generateName'?: string;
    'generation'?: number;
    'labels'?: {
        [key: string]: string;
    };
    'managedFields'?: Array<V1ManagedFieldsEntry>;
    'name'?: string;
    'namespace'?: string;
    'ownerReferences'?: Array<V1OwnerReference>;
    'resourceVersion'?: string;
    'selfLink'?: string;
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
