import { V1alpha1ApplicationSpecDomains } from '../models/V1alpha1ApplicationSpecDomains';
import { V1alpha1BlockStorage } from '../models/V1alpha1BlockStorage';
export declare class V1alpha1ApplicationSpec {
    'blockStorage'?: V1alpha1BlockStorage;
    'domains'?: V1alpha1ApplicationSpecDomains;
    'instance'?: string;
    'name'?: string;
    'pool'?: string;
    'replicas'?: number;
    'type'?: string;
    'values'?: any;
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
