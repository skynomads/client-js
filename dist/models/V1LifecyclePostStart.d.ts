import { V1LifecycleHandlerExec } from '../models/V1LifecycleHandlerExec';
import { V1LifecycleHandlerHttpGet } from '../models/V1LifecycleHandlerHttpGet';
import { V1LifecycleHandlerTcpSocket } from '../models/V1LifecycleHandlerTcpSocket';
export declare class V1LifecyclePostStart {
    'exec'?: V1LifecycleHandlerExec;
    'httpGet'?: V1LifecycleHandlerHttpGet;
    'tcpSocket'?: V1LifecycleHandlerTcpSocket;
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
