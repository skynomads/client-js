import { V1HostPathType } from '../models/V1HostPathType';
export declare class V1HostPathVolumeSource {
    'path'?: string;
    'type'?: V1HostPathType;
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
