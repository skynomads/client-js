import { V1JSON } from '../models/V1JSON';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha1ApplicationSpecValues } from '../models/V1alpha1ApplicationSpecValues';
import { V1alpha1Features } from '../models/V1alpha1Features';
import { V1alpha1Job } from '../models/V1alpha1Job';
import { V1alpha1Note } from '../models/V1alpha1Note';
export declare class V1alpha1Template {
    'apiVersion'?: string;
    'description'?: string;
    'features'?: V1alpha1Features;
    'hidden'?: boolean;
    'jobs'?: Array<V1alpha1Job>;
    'kind'?: string;
    'license'?: string;
    'manifests'?: V1alpha1ApplicationSpecValues;
    'metadata'?: V1ObjectMeta;
    'name'?: string;
    'notes'?: Array<V1alpha1Note>;
    'schema'?: V1JSON;
    'website'?: string;
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
