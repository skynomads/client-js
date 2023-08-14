export declare class V1VolumeAwsElasticBlockStore {
    'fsType'?: string;
    'partition'?: number;
    'readOnly'?: boolean;
    'volumeID'?: string;
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
