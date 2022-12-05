export declare class V1VolumeVsphereVolume {
    'fsType'?: string;
    'storagePolicyID'?: string;
    'storagePolicyName'?: string;
    'volumePath'?: string;
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
