import { V1PreferredSchedulingTermPreference } from '../models/V1PreferredSchedulingTermPreference';
export declare class V1PreferredSchedulingTerm {
    'preference'?: V1PreferredSchedulingTermPreference;
    'weight'?: number;
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
