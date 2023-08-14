export declare class V1GCEPersistentDiskVolumeSource {
    'fsType'?: string;
    'partition'?: number;
    'pdName'?: string;
    'readOnly'?: boolean;
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
