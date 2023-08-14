import { IntstrType } from '../models/IntstrType';
export declare class V1HTTPGetActionPort {
    'intVal'?: number;
    'strVal'?: string;
    'type'?: IntstrType;
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
