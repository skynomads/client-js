export declare class V1FCVolumeSource {
    'fsType'?: string;
    'lun'?: number;
    'readOnly'?: boolean;
    'targetWWNs'?: Array<string>;
    'wwids'?: Array<string>;
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
