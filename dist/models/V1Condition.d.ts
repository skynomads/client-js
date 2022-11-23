export declare class V1Condition {
    'lastTransitionTime'?: string;
    'message'?: string;
    'observedGeneration'?: number;
    'reason'?: string;
    'status'?: string;
    'type'?: string;
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
