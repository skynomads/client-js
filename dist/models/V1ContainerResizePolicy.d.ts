import { V1ResourceName } from '../models/V1ResourceName';
import { V1ResourceResizeRestartPolicy } from '../models/V1ResourceResizeRestartPolicy';
export declare class V1ContainerResizePolicy {
    'resourceName'?: V1ResourceName;
    'restartPolicy'?: V1ResourceResizeRestartPolicy;
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
