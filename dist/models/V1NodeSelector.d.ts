import { V1NodeSelectorTerm } from '../models/V1NodeSelectorTerm';
export declare class V1NodeSelector {
    'nodeSelectorTerms'?: Array<V1NodeSelectorTerm>;
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
