import { V1LifecycleHandlerExec } from '../models/V1LifecycleHandlerExec';
import { V1LifecycleHandlerHttpGet } from '../models/V1LifecycleHandlerHttpGet';
import { V1ProbeGrpc } from '../models/V1ProbeGrpc';
import { V1ProbeTcpSocket } from '../models/V1ProbeTcpSocket';
export declare class V1ContainerLivenessProbe {
    'exec'?: V1LifecycleHandlerExec;
    'failureThreshold'?: number;
    'grpc'?: V1ProbeGrpc;
    'httpGet'?: V1LifecycleHandlerHttpGet;
    'initialDelaySeconds'?: number;
    'periodSeconds'?: number;
    'successThreshold'?: number;
    'tcpSocket'?: V1ProbeTcpSocket;
    'terminationGracePeriodSeconds'?: number;
    'timeoutSeconds'?: number;
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
