import { V1LifecyclePostStart } from '../models/V1LifecyclePostStart';
import { V1LifecyclePreStop } from '../models/V1LifecyclePreStop';
export declare class V1Lifecycle {
    'postStart'?: V1LifecyclePostStart;
    'preStop'?: V1LifecyclePreStop;
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
