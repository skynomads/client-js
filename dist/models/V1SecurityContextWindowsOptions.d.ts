export declare class V1SecurityContextWindowsOptions {
    'gmsaCredentialSpec'?: string;
    'gmsaCredentialSpecName'?: string;
    'hostProcess'?: boolean;
    'runAsUserName'?: string;
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
