import { V1alpha1TemplateInstance } from '../models/V1alpha1TemplateInstance';
import { V1alpha1TemplateStorage } from '../models/V1alpha1TemplateStorage';
export declare class V1alpha1Features {
    'instance'?: V1alpha1TemplateInstance;
    'storage'?: V1alpha1TemplateStorage;
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
