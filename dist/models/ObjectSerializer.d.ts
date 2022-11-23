export * from '../models/V1Condition.js';
export * from '../models/V1ManagedFieldsEntry.js';
export * from '../models/V1OwnerReference.js';
export * from '../models/V1alpha1Export.js';
export * from '../models/V1alpha1ExportBucket.js';
export * from '../models/V1alpha1ExportSpec.js';
export * from '../models/V1alpha1ExportStatus.js';
export * from '../models/V1alpha1ExportTarget.js';
export * from '../models/V1alpha1ExportTargetSpec.js';
export * from '../models/V1alpha1ExportTargetStatus.js';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
