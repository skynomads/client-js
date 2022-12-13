import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha1ApplicationSpec } from '../models/V1alpha1ApplicationSpec';
import { V1alpha1ApplicationStatus } from '../models/V1alpha1ApplicationStatus';
export declare class V1alpha1Application {
    'apiVersion'?: string;
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1alpha1ApplicationSpec;
    'status'?: V1alpha1ApplicationStatus;
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
