import { V1PodDNSConfigOption } from '../models/V1PodDNSConfigOption';
export declare class V1PodSpecDnsConfig {
    'nameservers'?: Array<string>;
    'options'?: Array<V1PodDNSConfigOption>;
    'searches'?: Array<string>;
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
