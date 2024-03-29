import { ResourceQuantity } from '../models/ResourceQuantity';
import { V1Container } from '../models/V1Container';
import { V1DNSPolicy } from '../models/V1DNSPolicy';
import { V1EphemeralContainer } from '../models/V1EphemeralContainer';
import { V1HostAlias } from '../models/V1HostAlias';
import { V1LocalObjectReference } from '../models/V1LocalObjectReference';
import { V1PodReadinessGate } from '../models/V1PodReadinessGate';
import { V1PodResourceClaim } from '../models/V1PodResourceClaim';
import { V1PodSchedulingGate } from '../models/V1PodSchedulingGate';
import { V1PodSpecAffinity } from '../models/V1PodSpecAffinity';
import { V1PodSpecDnsConfig } from '../models/V1PodSpecDnsConfig';
import { V1PodSpecOs } from '../models/V1PodSpecOs';
import { V1PodSpecSecurityContext } from '../models/V1PodSpecSecurityContext';
import { V1PreemptionPolicy } from '../models/V1PreemptionPolicy';
import { V1RestartPolicy } from '../models/V1RestartPolicy';
import { V1Toleration } from '../models/V1Toleration';
import { V1TopologySpreadConstraint } from '../models/V1TopologySpreadConstraint';
import { V1Volume } from '../models/V1Volume';
export declare class V1PodTemplateSpecSpec {
    'activeDeadlineSeconds'?: number;
    'affinity'?: V1PodSpecAffinity;
    'automountServiceAccountToken'?: boolean;
    'containers'?: Array<V1Container>;
    'dnsConfig'?: V1PodSpecDnsConfig;
    'dnsPolicy'?: V1DNSPolicy;
    'enableServiceLinks'?: boolean;
    'ephemeralContainers'?: Array<V1EphemeralContainer>;
    'hostAliases'?: Array<V1HostAlias>;
    'hostIPC'?: boolean;
    'hostNetwork'?: boolean;
    'hostPID'?: boolean;
    'hostUsers'?: boolean;
    'hostname'?: string;
    'imagePullSecrets'?: Array<V1LocalObjectReference>;
    'initContainers'?: Array<V1Container>;
    'nodeName'?: string;
    'nodeSelector'?: {
        [key: string]: string;
    };
    'os'?: V1PodSpecOs;
    'overhead'?: {
        [key: string]: ResourceQuantity;
    };
    'preemptionPolicy'?: V1PreemptionPolicy;
    'priority'?: number;
    'priorityClassName'?: string;
    'readinessGates'?: Array<V1PodReadinessGate>;
    'resourceClaims'?: Array<V1PodResourceClaim>;
    'restartPolicy'?: V1RestartPolicy;
    'runtimeClassName'?: string;
    'schedulerName'?: string;
    'schedulingGates'?: Array<V1PodSchedulingGate>;
    'securityContext'?: V1PodSpecSecurityContext;
    'serviceAccount'?: string;
    'serviceAccountName'?: string;
    'setHostnameAsFQDN'?: boolean;
    'shareProcessNamespace'?: boolean;
    'subdomain'?: string;
    'terminationGracePeriodSeconds'?: number;
    'tolerations'?: Array<V1Toleration>;
    'topologySpreadConstraints'?: Array<V1TopologySpreadConstraint>;
    'volumes'?: Array<V1Volume>;
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
