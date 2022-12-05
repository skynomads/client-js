export declare class V1PodSecurityContextSeLinuxOptions {
    'level'?: string;
    'role'?: string;
    'type'?: string;
    'user'?: string;
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
