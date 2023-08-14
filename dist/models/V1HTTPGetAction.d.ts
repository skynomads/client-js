import { V1HTTPGetActionPort } from '../models/V1HTTPGetActionPort';
import { V1HTTPHeader } from '../models/V1HTTPHeader';
import { V1URIScheme } from '../models/V1URIScheme';
export declare class V1HTTPGetAction {
    'host'?: string;
    'httpHeaders'?: Array<V1HTTPHeader>;
    'path'?: string;
    'port'?: V1HTTPGetActionPort;
    'scheme'?: V1URIScheme;
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
