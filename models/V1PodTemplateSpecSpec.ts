/**
 * Cloudplane API
 * cloudplane.org API
 *
 * OpenAPI spec version: 0.1
 * Contact: support@cloudplane.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

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
import { HttpFile } from '../http/http';

/**
* Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status +optional
*/
export class V1PodTemplateSpecSpec {
    /**
    * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. +optional
    */
    'activeDeadlineSeconds'?: number;
    'affinity'?: V1PodSpecAffinity;
    /**
    * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. +optional
    */
    'automountServiceAccountToken'?: boolean;
    /**
    * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. +patchMergeKey=name +patchStrategy=merge
    */
    'containers'?: Array<V1Container>;
    'dnsConfig'?: V1PodSpecDnsConfig;
    'dnsPolicy'?: V1DNSPolicy;
    /**
    * EnableServiceLinks indicates whether information about services should be injected into pod\'s environment variables, matching the syntax of Docker links. Optional: Defaults to true. +optional
    */
    'enableServiceLinks'?: boolean;
    /**
    * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod\'s ephemeralcontainers subresource. +optional +patchMergeKey=name +patchStrategy=merge
    */
    'ephemeralContainers'?: Array<V1EphemeralContainer>;
    /**
    * HostAliases is an optional list of hosts and IPs that will be injected into the pod\'s hosts file if specified. This is only valid for non-hostNetwork pods. +optional +patchMergeKey=ip +patchStrategy=merge
    */
    'hostAliases'?: Array<V1HostAlias>;
    /**
    * Use the host\'s ipc namespace. Optional: Default to false. +k8s:conversion-gen=false +optional
    */
    'hostIPC'?: boolean;
    /**
    * Host networking requested for this pod. Use the host\'s network namespace. If this option is set, the ports that will be used must be specified. Default to false. +k8s:conversion-gen=false +optional
    */
    'hostNetwork'?: boolean;
    /**
    * Use the host\'s pid namespace. Optional: Default to false. +k8s:conversion-gen=false +optional
    */
    'hostPID'?: boolean;
    /**
    * Use the host\'s user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature. +k8s:conversion-gen=false +optional
    */
    'hostUsers'?: boolean;
    /**
    * Specifies the hostname of the Pod If not specified, the pod\'s hostname will be set to a system-defined value. +optional
    */
    'hostname'?: string;
    /**
    * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod +optional +patchMergeKey=name +patchStrategy=merge
    */
    'imagePullSecrets'?: Array<V1LocalObjectReference>;
    /**
    * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ +patchMergeKey=name +patchStrategy=merge
    */
    'initContainers'?: Array<V1Container>;
    /**
    * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. +optional
    */
    'nodeName'?: string;
    /**
    * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node\'s labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ +optional +mapType=atomic
    */
    'nodeSelector'?: { [key: string]: string; };
    'os'?: V1PodSpecOs;
    'overhead'?: { [key: string]: ResourceQuantity; };
    'preemptionPolicy'?: V1PreemptionPolicy;
    /**
    * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. +optional
    */
    'priority'?: number;
    /**
    * If specified, indicates the pod\'s priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. +optional
    */
    'priorityClassName'?: string;
    /**
    * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to \"True\" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates +optional
    */
    'readinessGates'?: Array<V1PodReadinessGate>;
    /**
    * ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable.  +patchMergeKey=name +patchStrategy=merge,retainKeys +listType=map +listMapKey=name +featureGate=DynamicResourceAllocation +optional
    */
    'resourceClaims'?: Array<V1PodResourceClaim>;
    'restartPolicy'?: V1RestartPolicy;
    /**
    * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the \"legacy\" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class +optional
    */
    'runtimeClassName'?: string;
    /**
    * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. +optional
    */
    'schedulerName'?: string;
    /**
    * SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.  SchedulingGates can only be set at pod creation time, and be removed only afterwards.  This is a beta feature enabled by the PodSchedulingReadiness feature gate.  +patchMergeKey=name +patchStrategy=merge +listType=map +listMapKey=name +featureGate=PodSchedulingReadiness +optional
    */
    'schedulingGates'?: Array<V1PodSchedulingGate>;
    'securityContext'?: V1PodSpecSecurityContext;
    /**
    * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. +k8s:conversion-gen=false +optional
    */
    'serviceAccount'?: string;
    /**
    * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ +optional
    */
    'serviceAccountName'?: string;
    /**
    * If true the pod\'s hostname will be configured as the pod\'s FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\\\SYSTEM\\\\CurrentControlSet\\\\Services\\\\Tcpip\\\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. +optional
    */
    'setHostnameAsFQDN'?: boolean;
    /**
    * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. +k8s:conversion-gen=false +optional
    */
    'shareProcessNamespace'?: boolean;
    /**
    * If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all. +optional
    */
    'subdomain'?: string;
    /**
    * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. +optional
    */
    'terminationGracePeriodSeconds'?: number;
    /**
    * If specified, the pod\'s tolerations. +optional
    */
    'tolerations'?: Array<V1Toleration>;
    /**
    * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. +optional +patchMergeKey=topologyKey +patchStrategy=merge +listType=map +listMapKey=topologyKey +listMapKey=whenUnsatisfiable
    */
    'topologySpreadConstraints'?: Array<V1TopologySpreadConstraint>;
    /**
    * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes +optional +patchMergeKey=name +patchStrategy=merge,retainKeys
    */
    'volumes'?: Array<V1Volume>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "V1PodSpecAffinity",
            "format": ""
        },
        {
            "name": "automountServiceAccountToken",
            "baseName": "automountServiceAccountToken",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<V1Container>",
            "format": ""
        },
        {
            "name": "dnsConfig",
            "baseName": "dnsConfig",
            "type": "V1PodSpecDnsConfig",
            "format": ""
        },
        {
            "name": "dnsPolicy",
            "baseName": "dnsPolicy",
            "type": "V1DNSPolicy",
            "format": ""
        },
        {
            "name": "enableServiceLinks",
            "baseName": "enableServiceLinks",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ephemeralContainers",
            "baseName": "ephemeralContainers",
            "type": "Array<V1EphemeralContainer>",
            "format": ""
        },
        {
            "name": "hostAliases",
            "baseName": "hostAliases",
            "type": "Array<V1HostAlias>",
            "format": ""
        },
        {
            "name": "hostIPC",
            "baseName": "hostIPC",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostNetwork",
            "baseName": "hostNetwork",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostPID",
            "baseName": "hostPID",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostUsers",
            "baseName": "hostUsers",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<V1LocalObjectReference>",
            "format": ""
        },
        {
            "name": "initContainers",
            "baseName": "initContainers",
            "type": "Array<V1Container>",
            "format": ""
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "V1PodSpecOs",
            "format": ""
        },
        {
            "name": "overhead",
            "baseName": "overhead",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        },
        {
            "name": "preemptionPolicy",
            "baseName": "preemptionPolicy",
            "type": "V1PreemptionPolicy",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "priorityClassName",
            "baseName": "priorityClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "readinessGates",
            "baseName": "readinessGates",
            "type": "Array<V1PodReadinessGate>",
            "format": ""
        },
        {
            "name": "resourceClaims",
            "baseName": "resourceClaims",
            "type": "Array<V1PodResourceClaim>",
            "format": ""
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "V1RestartPolicy",
            "format": ""
        },
        {
            "name": "runtimeClassName",
            "baseName": "runtimeClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "schedulerName",
            "baseName": "schedulerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "schedulingGates",
            "baseName": "schedulingGates",
            "type": "Array<V1PodSchedulingGate>",
            "format": ""
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "V1PodSpecSecurityContext",
            "format": ""
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string",
            "format": ""
        },
        {
            "name": "setHostnameAsFQDN",
            "baseName": "setHostnameAsFQDN",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shareProcessNamespace",
            "baseName": "shareProcessNamespace",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "terminationGracePeriodSeconds",
            "baseName": "terminationGracePeriodSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<V1Toleration>",
            "format": ""
        },
        {
            "name": "topologySpreadConstraints",
            "baseName": "topologySpreadConstraints",
            "type": "Array<V1TopologySpreadConstraint>",
            "format": ""
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<V1Volume>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodTemplateSpecSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


