"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PodTemplateSpecSpec = void 0;
var V1PodTemplateSpecSpec = (function () {
    function V1PodTemplateSpecSpec() {
    }
    V1PodTemplateSpecSpec.getAttributeTypeMap = function () {
        return V1PodTemplateSpecSpec.attributeTypeMap;
    };
    V1PodTemplateSpecSpec.discriminator = undefined;
    V1PodTemplateSpecSpec.attributeTypeMap = [
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
        }
    ];
    return V1PodTemplateSpecSpec;
}());
exports.V1PodTemplateSpecSpec = V1PodTemplateSpecSpec;
//# sourceMappingURL=V1PodTemplateSpecSpec.js.map