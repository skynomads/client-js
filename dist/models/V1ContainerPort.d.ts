import { V1Protocol } from '../models/V1Protocol';
export declare class V1ContainerPort {
    'containerPort'?: number;
    'hostIP'?: string;
    'hostPort'?: number;
    'name'?: string;
    'protocol'?: V1Protocol;
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
