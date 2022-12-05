import { V1TCPSocketActionPort } from '../models/V1TCPSocketActionPort';
export declare class V1LifecycleHandlerTcpSocket {
    'host'?: string;
    'port'?: V1TCPSocketActionPort;
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
