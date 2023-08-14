"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/ClientIdentity"), exports);
__exportStar(require("../models/ClientIdentityCredentials"), exports);
__exportStar(require("../models/ClientIdentityCredentialsType"), exports);
__exportStar(require("../models/ClientIdentityState"), exports);
__exportStar(require("../models/ClientIdentityWithCredentials"), exports);
__exportStar(require("../models/ClientIdentityWithCredentialsOidc"), exports);
__exportStar(require("../models/ClientIdentityWithCredentialsOidcConfig"), exports);
__exportStar(require("../models/ClientIdentityWithCredentialsOidcConfigProvider"), exports);
__exportStar(require("../models/ClientIdentityWithCredentialsPassword"), exports);
__exportStar(require("../models/ClientIdentityWithCredentialsPasswordConfig"), exports);
__exportStar(require("../models/ClientRecoveryIdentityAddress"), exports);
__exportStar(require("../models/ClientUpdateIdentityBody"), exports);
__exportStar(require("../models/ClientVerifiableIdentityAddress"), exports);
__exportStar(require("../models/IntstrIntOrString"), exports);
__exportStar(require("../models/IntstrType"), exports);
__exportStar(require("../models/K8sIoApiCoreV1ConditionStatus"), exports);
__exportStar(require("../models/K8sIoApimachineryPkgApisMetaV1ConditionStatus"), exports);
__exportStar(require("../models/ModelHistogramBucket"), exports);
__exportStar(require("../models/ModelSampleHistogram"), exports);
__exportStar(require("../models/ModelSampleHistogramPair"), exports);
__exportStar(require("../models/ModelSampleHistogramPairHistogram"), exports);
__exportStar(require("../models/ModelSamplePair"), exports);
__exportStar(require("../models/ModelSampleStream"), exports);
__exportStar(require("../models/ResourceQuantity"), exports);
__exportStar(require("../models/StripeInvoiceStatus"), exports);
__exportStar(require("../models/StripePaymentMethodType"), exports);
__exportStar(require("../models/StripeTaxIDType"), exports);
__exportStar(require("../models/V1AWSElasticBlockStoreVolumeSource"), exports);
__exportStar(require("../models/V1Account"), exports);
__exportStar(require("../models/V1Address"), exports);
__exportStar(require("../models/V1Affinity"), exports);
__exportStar(require("../models/V1AffinityNodeAffinity"), exports);
__exportStar(require("../models/V1AffinityPodAffinity"), exports);
__exportStar(require("../models/V1AffinityPodAntiAffinity"), exports);
__exportStar(require("../models/V1ApplicationMetrics"), exports);
__exportStar(require("../models/V1AzureDataDiskCachingMode"), exports);
__exportStar(require("../models/V1AzureDataDiskKind"), exports);
__exportStar(require("../models/V1AzureDiskVolumeSource"), exports);
__exportStar(require("../models/V1AzureFileVolumeSource"), exports);
__exportStar(require("../models/V1CSIVolumeSource"), exports);
__exportStar(require("../models/V1CSIVolumeSourceNodePublishSecretRef"), exports);
__exportStar(require("../models/V1Capabilities"), exports);
__exportStar(require("../models/V1CephFSVolumeSource"), exports);
__exportStar(require("../models/V1CephFSVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1CinderVolumeSource"), exports);
__exportStar(require("../models/V1CinderVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1ClaimSource"), exports);
__exportStar(require("../models/V1CompletionMode"), exports);
__exportStar(require("../models/V1Condition"), exports);
__exportStar(require("../models/V1ConfigMapEnvSource"), exports);
__exportStar(require("../models/V1ConfigMapKeySelector"), exports);
__exportStar(require("../models/V1ConfigMapProjection"), exports);
__exportStar(require("../models/V1ConfigMapVolumeSource"), exports);
__exportStar(require("../models/V1Container"), exports);
__exportStar(require("../models/V1ContainerLifecycle"), exports);
__exportStar(require("../models/V1ContainerLivenessProbe"), exports);
__exportStar(require("../models/V1ContainerPort"), exports);
__exportStar(require("../models/V1ContainerReadinessProbe"), exports);
__exportStar(require("../models/V1ContainerResizePolicy"), exports);
__exportStar(require("../models/V1ContainerResources"), exports);
__exportStar(require("../models/V1ContainerSecurityContext"), exports);
__exportStar(require("../models/V1ContainerStartupProbe"), exports);
__exportStar(require("../models/V1Customer"), exports);
__exportStar(require("../models/V1DNSPolicy"), exports);
__exportStar(require("../models/V1DownwardAPIProjection"), exports);
__exportStar(require("../models/V1DownwardAPIVolumeFile"), exports);
__exportStar(require("../models/V1DownwardAPIVolumeFileFieldRef"), exports);
__exportStar(require("../models/V1DownwardAPIVolumeFileResourceFieldRef"), exports);
__exportStar(require("../models/V1DownwardAPIVolumeSource"), exports);
__exportStar(require("../models/V1EmptyDirVolumeSource"), exports);
__exportStar(require("../models/V1EmptyDirVolumeSourceSizeLimit"), exports);
__exportStar(require("../models/V1EnvFromSource"), exports);
__exportStar(require("../models/V1EnvFromSourceConfigMapRef"), exports);
__exportStar(require("../models/V1EnvFromSourceSecretRef"), exports);
__exportStar(require("../models/V1EnvVar"), exports);
__exportStar(require("../models/V1EnvVarSource"), exports);
__exportStar(require("../models/V1EnvVarSourceConfigMapKeyRef"), exports);
__exportStar(require("../models/V1EnvVarSourceFieldRef"), exports);
__exportStar(require("../models/V1EnvVarSourceResourceFieldRef"), exports);
__exportStar(require("../models/V1EnvVarSourceSecretKeyRef"), exports);
__exportStar(require("../models/V1EnvVarValueFrom"), exports);
__exportStar(require("../models/V1EphemeralContainer"), exports);
__exportStar(require("../models/V1EphemeralContainerLifecycle"), exports);
__exportStar(require("../models/V1EphemeralContainerLivenessProbe"), exports);
__exportStar(require("../models/V1EphemeralContainerResources"), exports);
__exportStar(require("../models/V1EphemeralContainerSecurityContext"), exports);
__exportStar(require("../models/V1EphemeralVolumeSource"), exports);
__exportStar(require("../models/V1EphemeralVolumeSourceVolumeClaimTemplate"), exports);
__exportStar(require("../models/V1ExecAction"), exports);
__exportStar(require("../models/V1FCVolumeSource"), exports);
__exportStar(require("../models/V1FlexVolumeSource"), exports);
__exportStar(require("../models/V1FlexVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1FlockerVolumeSource"), exports);
__exportStar(require("../models/V1GCEPersistentDiskVolumeSource"), exports);
__exportStar(require("../models/V1GRPCAction"), exports);
__exportStar(require("../models/V1GitRepoVolumeSource"), exports);
__exportStar(require("../models/V1GlusterfsVolumeSource"), exports);
__exportStar(require("../models/V1HTTPGetAction"), exports);
__exportStar(require("../models/V1HTTPGetActionPort"), exports);
__exportStar(require("../models/V1HTTPHeader"), exports);
__exportStar(require("../models/V1HostAlias"), exports);
__exportStar(require("../models/V1HostPathType"), exports);
__exportStar(require("../models/V1HostPathVolumeSource"), exports);
__exportStar(require("../models/V1ISCSIVolumeSource"), exports);
__exportStar(require("../models/V1ISCSIVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1Invoice"), exports);
__exportStar(require("../models/V1Job"), exports);
__exportStar(require("../models/V1JobCondition"), exports);
__exportStar(require("../models/V1JobConditionType"), exports);
__exportStar(require("../models/V1JobInput"), exports);
__exportStar(require("../models/V1JobMetadata"), exports);
__exportStar(require("../models/V1JobResponse"), exports);
__exportStar(require("../models/V1JobSpec"), exports);
__exportStar(require("../models/V1JobSpecPodFailurePolicy"), exports);
__exportStar(require("../models/V1JobSpecSelector"), exports);
__exportStar(require("../models/V1JobSpecTemplate"), exports);
__exportStar(require("../models/V1JobStatus"), exports);
__exportStar(require("../models/V1JobStatusUncountedTerminatedPods"), exports);
__exportStar(require("../models/V1KeyToPath"), exports);
__exportStar(require("../models/V1LabelSelector"), exports);
__exportStar(require("../models/V1LabelSelectorOperator"), exports);
__exportStar(require("../models/V1LabelSelectorRequirement"), exports);
__exportStar(require("../models/V1Lifecycle"), exports);
__exportStar(require("../models/V1LifecycleHandler"), exports);
__exportStar(require("../models/V1LifecycleHandlerExec"), exports);
__exportStar(require("../models/V1LifecycleHandlerHttpGet"), exports);
__exportStar(require("../models/V1LifecycleHandlerTcpSocket"), exports);
__exportStar(require("../models/V1LifecyclePostStart"), exports);
__exportStar(require("../models/V1LifecyclePreStop"), exports);
__exportStar(require("../models/V1LocalObjectReference"), exports);
__exportStar(require("../models/V1ManagedFieldsEntry"), exports);
__exportStar(require("../models/V1ManagedFieldsOperationType"), exports);
__exportStar(require("../models/V1MountPropagationMode"), exports);
__exportStar(require("../models/V1NFSVolumeSource"), exports);
__exportStar(require("../models/V1NodeAffinity"), exports);
__exportStar(require("../models/V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution"), exports);
__exportStar(require("../models/V1NodeInclusionPolicy"), exports);
__exportStar(require("../models/V1NodeSelector"), exports);
__exportStar(require("../models/V1NodeSelectorOperator"), exports);
__exportStar(require("../models/V1NodeSelectorRequirement"), exports);
__exportStar(require("../models/V1NodeSelectorTerm"), exports);
__exportStar(require("../models/V1OSName"), exports);
__exportStar(require("../models/V1ObjectFieldSelector"), exports);
__exportStar(require("../models/V1ObjectMeta"), exports);
__exportStar(require("../models/V1OwnerReference"), exports);
__exportStar(require("../models/V1PaymentMethod"), exports);
__exportStar(require("../models/V1PersistentVolumeAccessMode"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimSpec"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimSpecDataSource"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimSpecDataSourceRef"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimSpecResources"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimSpecSelector"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimTemplate"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimTemplateMetadata"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimTemplateSpec"), exports);
__exportStar(require("../models/V1PersistentVolumeClaimVolumeSource"), exports);
__exportStar(require("../models/V1PersistentVolumeMode"), exports);
__exportStar(require("../models/V1PhotonPersistentDiskVolumeSource"), exports);
__exportStar(require("../models/V1PodAffinity"), exports);
__exportStar(require("../models/V1PodAffinityTerm"), exports);
__exportStar(require("../models/V1PodAffinityTermLabelSelector"), exports);
__exportStar(require("../models/V1PodAffinityTermNamespaceSelector"), exports);
__exportStar(require("../models/V1PodAntiAffinity"), exports);
__exportStar(require("../models/V1PodConditionType"), exports);
__exportStar(require("../models/V1PodDNSConfig"), exports);
__exportStar(require("../models/V1PodDNSConfigOption"), exports);
__exportStar(require("../models/V1PodFSGroupChangePolicy"), exports);
__exportStar(require("../models/V1PodFailurePolicy"), exports);
__exportStar(require("../models/V1PodFailurePolicyAction"), exports);
__exportStar(require("../models/V1PodFailurePolicyOnExitCodesOperator"), exports);
__exportStar(require("../models/V1PodFailurePolicyOnExitCodesRequirement"), exports);
__exportStar(require("../models/V1PodFailurePolicyOnPodConditionsPattern"), exports);
__exportStar(require("../models/V1PodFailurePolicyRule"), exports);
__exportStar(require("../models/V1PodFailurePolicyRuleOnExitCodes"), exports);
__exportStar(require("../models/V1PodOS"), exports);
__exportStar(require("../models/V1PodReadinessGate"), exports);
__exportStar(require("../models/V1PodResourceClaim"), exports);
__exportStar(require("../models/V1PodResourceClaimSource"), exports);
__exportStar(require("../models/V1PodSchedulingGate"), exports);
__exportStar(require("../models/V1PodSecurityContext"), exports);
__exportStar(require("../models/V1PodSecurityContextSeLinuxOptions"), exports);
__exportStar(require("../models/V1PodSecurityContextSeccompProfile"), exports);
__exportStar(require("../models/V1PodSecurityContextWindowsOptions"), exports);
__exportStar(require("../models/V1PodSpec"), exports);
__exportStar(require("../models/V1PodSpecAffinity"), exports);
__exportStar(require("../models/V1PodSpecDnsConfig"), exports);
__exportStar(require("../models/V1PodSpecOs"), exports);
__exportStar(require("../models/V1PodSpecSecurityContext"), exports);
__exportStar(require("../models/V1PodTemplateSpec"), exports);
__exportStar(require("../models/V1PodTemplateSpecSpec"), exports);
__exportStar(require("../models/V1PortworxVolumeSource"), exports);
__exportStar(require("../models/V1PreemptionPolicy"), exports);
__exportStar(require("../models/V1PreferredSchedulingTerm"), exports);
__exportStar(require("../models/V1PreferredSchedulingTermPreference"), exports);
__exportStar(require("../models/V1Probe"), exports);
__exportStar(require("../models/V1ProbeGrpc"), exports);
__exportStar(require("../models/V1ProbeTcpSocket"), exports);
__exportStar(require("../models/V1ProcMountType"), exports);
__exportStar(require("../models/V1ProjectedVolumeSource"), exports);
__exportStar(require("../models/V1Protocol"), exports);
__exportStar(require("../models/V1PullPolicy"), exports);
__exportStar(require("../models/V1QuobyteVolumeSource"), exports);
__exportStar(require("../models/V1RBDVolumeSource"), exports);
__exportStar(require("../models/V1RBDVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1ResourceClaim"), exports);
__exportStar(require("../models/V1ResourceFieldSelector"), exports);
__exportStar(require("../models/V1ResourceFieldSelectorDivisor"), exports);
__exportStar(require("../models/V1ResourceName"), exports);
__exportStar(require("../models/V1ResourceRequirements"), exports);
__exportStar(require("../models/V1ResourceResizeRestartPolicy"), exports);
__exportStar(require("../models/V1RestartPolicy"), exports);
__exportStar(require("../models/V1SELinuxOptions"), exports);
__exportStar(require("../models/V1ScaleIOVolumeSource"), exports);
__exportStar(require("../models/V1ScaleIOVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1SeccompProfile"), exports);
__exportStar(require("../models/V1SeccompProfileType"), exports);
__exportStar(require("../models/V1SecretEnvSource"), exports);
__exportStar(require("../models/V1SecretKeySelector"), exports);
__exportStar(require("../models/V1SecretProjection"), exports);
__exportStar(require("../models/V1SecretVolumeSource"), exports);
__exportStar(require("../models/V1SecurityContext"), exports);
__exportStar(require("../models/V1SecurityContextCapabilities"), exports);
__exportStar(require("../models/V1SecurityContextSeLinuxOptions"), exports);
__exportStar(require("../models/V1SecurityContextSeccompProfile"), exports);
__exportStar(require("../models/V1SecurityContextWindowsOptions"), exports);
__exportStar(require("../models/V1ServiceAccountTokenProjection"), exports);
__exportStar(require("../models/V1SetupIntent"), exports);
__exportStar(require("../models/V1StorageMedium"), exports);
__exportStar(require("../models/V1StorageOSVolumeSource"), exports);
__exportStar(require("../models/V1StorageOSVolumeSourceSecretRef"), exports);
__exportStar(require("../models/V1Sysctl"), exports);
__exportStar(require("../models/V1TCPSocketAction"), exports);
__exportStar(require("../models/V1TCPSocketActionPort"), exports);
__exportStar(require("../models/V1TaintEffect"), exports);
__exportStar(require("../models/V1TaxID"), exports);
__exportStar(require("../models/V1TerminationMessagePolicy"), exports);
__exportStar(require("../models/V1Toleration"), exports);
__exportStar(require("../models/V1TolerationOperator"), exports);
__exportStar(require("../models/V1TopologySpreadConstraint"), exports);
__exportStar(require("../models/V1TopologySpreadConstraintLabelSelector"), exports);
__exportStar(require("../models/V1TypedLocalObjectReference"), exports);
__exportStar(require("../models/V1TypedObjectReference"), exports);
__exportStar(require("../models/V1URIScheme"), exports);
__exportStar(require("../models/V1UncountedTerminatedPods"), exports);
__exportStar(require("../models/V1UnsatisfiableConstraintAction"), exports);
__exportStar(require("../models/V1Volume"), exports);
__exportStar(require("../models/V1VolumeAwsElasticBlockStore"), exports);
__exportStar(require("../models/V1VolumeAzureDisk"), exports);
__exportStar(require("../models/V1VolumeAzureFile"), exports);
__exportStar(require("../models/V1VolumeCephfs"), exports);
__exportStar(require("../models/V1VolumeCinder"), exports);
__exportStar(require("../models/V1VolumeConfigMap"), exports);
__exportStar(require("../models/V1VolumeCsi"), exports);
__exportStar(require("../models/V1VolumeDevice"), exports);
__exportStar(require("../models/V1VolumeDownwardAPI"), exports);
__exportStar(require("../models/V1VolumeEmptyDir"), exports);
__exportStar(require("../models/V1VolumeEphemeral"), exports);
__exportStar(require("../models/V1VolumeFc"), exports);
__exportStar(require("../models/V1VolumeFlexVolume"), exports);
__exportStar(require("../models/V1VolumeFlocker"), exports);
__exportStar(require("../models/V1VolumeGcePersistentDisk"), exports);
__exportStar(require("../models/V1VolumeGitRepo"), exports);
__exportStar(require("../models/V1VolumeGlusterfs"), exports);
__exportStar(require("../models/V1VolumeHostPath"), exports);
__exportStar(require("../models/V1VolumeIscsi"), exports);
__exportStar(require("../models/V1VolumeMount"), exports);
__exportStar(require("../models/V1VolumeNfs"), exports);
__exportStar(require("../models/V1VolumePersistentVolumeClaim"), exports);
__exportStar(require("../models/V1VolumePhotonPersistentDisk"), exports);
__exportStar(require("../models/V1VolumePortworxVolume"), exports);
__exportStar(require("../models/V1VolumeProjected"), exports);
__exportStar(require("../models/V1VolumeProjection"), exports);
__exportStar(require("../models/V1VolumeProjectionConfigMap"), exports);
__exportStar(require("../models/V1VolumeProjectionDownwardAPI"), exports);
__exportStar(require("../models/V1VolumeProjectionSecret"), exports);
__exportStar(require("../models/V1VolumeProjectionServiceAccountToken"), exports);
__exportStar(require("../models/V1VolumeQuobyte"), exports);
__exportStar(require("../models/V1VolumeRbd"), exports);
__exportStar(require("../models/V1VolumeScaleIO"), exports);
__exportStar(require("../models/V1VolumeSecret"), exports);
__exportStar(require("../models/V1VolumeStorageos"), exports);
__exportStar(require("../models/V1VolumeVsphereVolume"), exports);
__exportStar(require("../models/V1VsphereVirtualDiskVolumeSource"), exports);
__exportStar(require("../models/V1WeightedPodAffinityTerm"), exports);
__exportStar(require("../models/V1WeightedPodAffinityTermPodAffinityTerm"), exports);
__exportStar(require("../models/V1WindowsSecurityContextOptions"), exports);
__exportStar(require("../models/V1alpha1Application"), exports);
__exportStar(require("../models/V1alpha1ApplicationSpec"), exports);
__exportStar(require("../models/V1alpha1ApplicationSpecDomains"), exports);
__exportStar(require("../models/V1alpha1ApplicationStatus"), exports);
__exportStar(require("../models/V1alpha1BlockStorage"), exports);
__exportStar(require("../models/V1alpha1Domains"), exports);
__exportStar(require("../models/V1alpha1Export"), exports);
__exportStar(require("../models/V1alpha1ExportBucket"), exports);
__exportStar(require("../models/V1alpha1ExportMetadata"), exports);
__exportStar(require("../models/V1alpha1ExportSchedule"), exports);
__exportStar(require("../models/V1alpha1ExportScheduleSpec"), exports);
__exportStar(require("../models/V1alpha1ExportScheduleStatus"), exports);
__exportStar(require("../models/V1alpha1ExportSpec"), exports);
__exportStar(require("../models/V1alpha1ExportStatus"), exports);
__exportStar(require("../models/V1alpha1ExportTarget"), exports);
__exportStar(require("../models/V1alpha1ExportTargetSpec"), exports);
__exportStar(require("../models/V1alpha1ExportTargetStatus"), exports);
__exportStar(require("../models/V1alpha1Features"), exports);
__exportStar(require("../models/V1alpha1Job"), exports);
__exportStar(require("../models/V1alpha1Note"), exports);
__exportStar(require("../models/V1alpha1Template"), exports);
__exportStar(require("../models/V1alpha1TemplateInstance"), exports);
__exportStar(require("../models/V1alpha1TemplateStorage"), exports);
var ClientIdentity_1 = require("../models/ClientIdentity");
var ClientIdentityCredentials_1 = require("../models/ClientIdentityCredentials");
var ClientIdentityWithCredentials_1 = require("../models/ClientIdentityWithCredentials");
var ClientIdentityWithCredentialsOidc_1 = require("../models/ClientIdentityWithCredentialsOidc");
var ClientIdentityWithCredentialsOidcConfig_1 = require("../models/ClientIdentityWithCredentialsOidcConfig");
var ClientIdentityWithCredentialsOidcConfigProvider_1 = require("../models/ClientIdentityWithCredentialsOidcConfigProvider");
var ClientIdentityWithCredentialsPassword_1 = require("../models/ClientIdentityWithCredentialsPassword");
var ClientIdentityWithCredentialsPasswordConfig_1 = require("../models/ClientIdentityWithCredentialsPasswordConfig");
var ClientRecoveryIdentityAddress_1 = require("../models/ClientRecoveryIdentityAddress");
var ClientUpdateIdentityBody_1 = require("../models/ClientUpdateIdentityBody");
var ClientVerifiableIdentityAddress_1 = require("../models/ClientVerifiableIdentityAddress");
var IntstrIntOrString_1 = require("../models/IntstrIntOrString");
var ModelHistogramBucket_1 = require("../models/ModelHistogramBucket");
var ModelSampleHistogram_1 = require("../models/ModelSampleHistogram");
var ModelSampleHistogramPair_1 = require("../models/ModelSampleHistogramPair");
var ModelSampleHistogramPairHistogram_1 = require("../models/ModelSampleHistogramPairHistogram");
var ModelSamplePair_1 = require("../models/ModelSamplePair");
var ModelSampleStream_1 = require("../models/ModelSampleStream");
var ResourceQuantity_1 = require("../models/ResourceQuantity");
var V1AWSElasticBlockStoreVolumeSource_1 = require("../models/V1AWSElasticBlockStoreVolumeSource");
var V1Account_1 = require("../models/V1Account");
var V1Address_1 = require("../models/V1Address");
var V1Affinity_1 = require("../models/V1Affinity");
var V1AffinityNodeAffinity_1 = require("../models/V1AffinityNodeAffinity");
var V1AffinityPodAffinity_1 = require("../models/V1AffinityPodAffinity");
var V1AffinityPodAntiAffinity_1 = require("../models/V1AffinityPodAntiAffinity");
var V1ApplicationMetrics_1 = require("../models/V1ApplicationMetrics");
var V1AzureDiskVolumeSource_1 = require("../models/V1AzureDiskVolumeSource");
var V1AzureFileVolumeSource_1 = require("../models/V1AzureFileVolumeSource");
var V1CSIVolumeSource_1 = require("../models/V1CSIVolumeSource");
var V1CSIVolumeSourceNodePublishSecretRef_1 = require("../models/V1CSIVolumeSourceNodePublishSecretRef");
var V1Capabilities_1 = require("../models/V1Capabilities");
var V1CephFSVolumeSource_1 = require("../models/V1CephFSVolumeSource");
var V1CephFSVolumeSourceSecretRef_1 = require("../models/V1CephFSVolumeSourceSecretRef");
var V1CinderVolumeSource_1 = require("../models/V1CinderVolumeSource");
var V1CinderVolumeSourceSecretRef_1 = require("../models/V1CinderVolumeSourceSecretRef");
var V1ClaimSource_1 = require("../models/V1ClaimSource");
var V1Condition_1 = require("../models/V1Condition");
var V1ConfigMapEnvSource_1 = require("../models/V1ConfigMapEnvSource");
var V1ConfigMapKeySelector_1 = require("../models/V1ConfigMapKeySelector");
var V1ConfigMapProjection_1 = require("../models/V1ConfigMapProjection");
var V1ConfigMapVolumeSource_1 = require("../models/V1ConfigMapVolumeSource");
var V1Container_1 = require("../models/V1Container");
var V1ContainerLifecycle_1 = require("../models/V1ContainerLifecycle");
var V1ContainerLivenessProbe_1 = require("../models/V1ContainerLivenessProbe");
var V1ContainerPort_1 = require("../models/V1ContainerPort");
var V1ContainerReadinessProbe_1 = require("../models/V1ContainerReadinessProbe");
var V1ContainerResizePolicy_1 = require("../models/V1ContainerResizePolicy");
var V1ContainerResources_1 = require("../models/V1ContainerResources");
var V1ContainerSecurityContext_1 = require("../models/V1ContainerSecurityContext");
var V1ContainerStartupProbe_1 = require("../models/V1ContainerStartupProbe");
var V1Customer_1 = require("../models/V1Customer");
var V1DownwardAPIProjection_1 = require("../models/V1DownwardAPIProjection");
var V1DownwardAPIVolumeFile_1 = require("../models/V1DownwardAPIVolumeFile");
var V1DownwardAPIVolumeFileFieldRef_1 = require("../models/V1DownwardAPIVolumeFileFieldRef");
var V1DownwardAPIVolumeFileResourceFieldRef_1 = require("../models/V1DownwardAPIVolumeFileResourceFieldRef");
var V1DownwardAPIVolumeSource_1 = require("../models/V1DownwardAPIVolumeSource");
var V1EmptyDirVolumeSource_1 = require("../models/V1EmptyDirVolumeSource");
var V1EmptyDirVolumeSourceSizeLimit_1 = require("../models/V1EmptyDirVolumeSourceSizeLimit");
var V1EnvFromSource_1 = require("../models/V1EnvFromSource");
var V1EnvFromSourceConfigMapRef_1 = require("../models/V1EnvFromSourceConfigMapRef");
var V1EnvFromSourceSecretRef_1 = require("../models/V1EnvFromSourceSecretRef");
var V1EnvVar_1 = require("../models/V1EnvVar");
var V1EnvVarSource_1 = require("../models/V1EnvVarSource");
var V1EnvVarSourceConfigMapKeyRef_1 = require("../models/V1EnvVarSourceConfigMapKeyRef");
var V1EnvVarSourceFieldRef_1 = require("../models/V1EnvVarSourceFieldRef");
var V1EnvVarSourceResourceFieldRef_1 = require("../models/V1EnvVarSourceResourceFieldRef");
var V1EnvVarSourceSecretKeyRef_1 = require("../models/V1EnvVarSourceSecretKeyRef");
var V1EnvVarValueFrom_1 = require("../models/V1EnvVarValueFrom");
var V1EphemeralContainer_1 = require("../models/V1EphemeralContainer");
var V1EphemeralContainerLifecycle_1 = require("../models/V1EphemeralContainerLifecycle");
var V1EphemeralContainerLivenessProbe_1 = require("../models/V1EphemeralContainerLivenessProbe");
var V1EphemeralContainerResources_1 = require("../models/V1EphemeralContainerResources");
var V1EphemeralContainerSecurityContext_1 = require("../models/V1EphemeralContainerSecurityContext");
var V1EphemeralVolumeSource_1 = require("../models/V1EphemeralVolumeSource");
var V1EphemeralVolumeSourceVolumeClaimTemplate_1 = require("../models/V1EphemeralVolumeSourceVolumeClaimTemplate");
var V1ExecAction_1 = require("../models/V1ExecAction");
var V1FCVolumeSource_1 = require("../models/V1FCVolumeSource");
var V1FlexVolumeSource_1 = require("../models/V1FlexVolumeSource");
var V1FlexVolumeSourceSecretRef_1 = require("../models/V1FlexVolumeSourceSecretRef");
var V1FlockerVolumeSource_1 = require("../models/V1FlockerVolumeSource");
var V1GCEPersistentDiskVolumeSource_1 = require("../models/V1GCEPersistentDiskVolumeSource");
var V1GRPCAction_1 = require("../models/V1GRPCAction");
var V1GitRepoVolumeSource_1 = require("../models/V1GitRepoVolumeSource");
var V1GlusterfsVolumeSource_1 = require("../models/V1GlusterfsVolumeSource");
var V1HTTPGetAction_1 = require("../models/V1HTTPGetAction");
var V1HTTPGetActionPort_1 = require("../models/V1HTTPGetActionPort");
var V1HTTPHeader_1 = require("../models/V1HTTPHeader");
var V1HostAlias_1 = require("../models/V1HostAlias");
var V1HostPathVolumeSource_1 = require("../models/V1HostPathVolumeSource");
var V1ISCSIVolumeSource_1 = require("../models/V1ISCSIVolumeSource");
var V1ISCSIVolumeSourceSecretRef_1 = require("../models/V1ISCSIVolumeSourceSecretRef");
var V1Invoice_1 = require("../models/V1Invoice");
var V1Job_1 = require("../models/V1Job");
var V1JobCondition_1 = require("../models/V1JobCondition");
var V1JobInput_1 = require("../models/V1JobInput");
var V1JobMetadata_1 = require("../models/V1JobMetadata");
var V1JobResponse_1 = require("../models/V1JobResponse");
var V1JobSpec_1 = require("../models/V1JobSpec");
var V1JobSpecPodFailurePolicy_1 = require("../models/V1JobSpecPodFailurePolicy");
var V1JobSpecSelector_1 = require("../models/V1JobSpecSelector");
var V1JobSpecTemplate_1 = require("../models/V1JobSpecTemplate");
var V1JobStatus_1 = require("../models/V1JobStatus");
var V1JobStatusUncountedTerminatedPods_1 = require("../models/V1JobStatusUncountedTerminatedPods");
var V1KeyToPath_1 = require("../models/V1KeyToPath");
var V1LabelSelector_1 = require("../models/V1LabelSelector");
var V1LabelSelectorRequirement_1 = require("../models/V1LabelSelectorRequirement");
var V1Lifecycle_1 = require("../models/V1Lifecycle");
var V1LifecycleHandler_1 = require("../models/V1LifecycleHandler");
var V1LifecycleHandlerExec_1 = require("../models/V1LifecycleHandlerExec");
var V1LifecycleHandlerHttpGet_1 = require("../models/V1LifecycleHandlerHttpGet");
var V1LifecycleHandlerTcpSocket_1 = require("../models/V1LifecycleHandlerTcpSocket");
var V1LifecyclePostStart_1 = require("../models/V1LifecyclePostStart");
var V1LifecyclePreStop_1 = require("../models/V1LifecyclePreStop");
var V1LocalObjectReference_1 = require("../models/V1LocalObjectReference");
var V1ManagedFieldsEntry_1 = require("../models/V1ManagedFieldsEntry");
var V1NFSVolumeSource_1 = require("../models/V1NFSVolumeSource");
var V1NodeAffinity_1 = require("../models/V1NodeAffinity");
var V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution_1 = require("../models/V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution");
var V1NodeSelector_1 = require("../models/V1NodeSelector");
var V1NodeSelectorRequirement_1 = require("../models/V1NodeSelectorRequirement");
var V1NodeSelectorTerm_1 = require("../models/V1NodeSelectorTerm");
var V1ObjectFieldSelector_1 = require("../models/V1ObjectFieldSelector");
var V1ObjectMeta_1 = require("../models/V1ObjectMeta");
var V1OwnerReference_1 = require("../models/V1OwnerReference");
var V1PaymentMethod_1 = require("../models/V1PaymentMethod");
var V1PersistentVolumeClaimSpec_1 = require("../models/V1PersistentVolumeClaimSpec");
var V1PersistentVolumeClaimSpecDataSource_1 = require("../models/V1PersistentVolumeClaimSpecDataSource");
var V1PersistentVolumeClaimSpecDataSourceRef_1 = require("../models/V1PersistentVolumeClaimSpecDataSourceRef");
var V1PersistentVolumeClaimSpecResources_1 = require("../models/V1PersistentVolumeClaimSpecResources");
var V1PersistentVolumeClaimSpecSelector_1 = require("../models/V1PersistentVolumeClaimSpecSelector");
var V1PersistentVolumeClaimTemplate_1 = require("../models/V1PersistentVolumeClaimTemplate");
var V1PersistentVolumeClaimTemplateMetadata_1 = require("../models/V1PersistentVolumeClaimTemplateMetadata");
var V1PersistentVolumeClaimTemplateSpec_1 = require("../models/V1PersistentVolumeClaimTemplateSpec");
var V1PersistentVolumeClaimVolumeSource_1 = require("../models/V1PersistentVolumeClaimVolumeSource");
var V1PhotonPersistentDiskVolumeSource_1 = require("../models/V1PhotonPersistentDiskVolumeSource");
var V1PodAffinity_1 = require("../models/V1PodAffinity");
var V1PodAffinityTerm_1 = require("../models/V1PodAffinityTerm");
var V1PodAffinityTermLabelSelector_1 = require("../models/V1PodAffinityTermLabelSelector");
var V1PodAffinityTermNamespaceSelector_1 = require("../models/V1PodAffinityTermNamespaceSelector");
var V1PodAntiAffinity_1 = require("../models/V1PodAntiAffinity");
var V1PodDNSConfig_1 = require("../models/V1PodDNSConfig");
var V1PodDNSConfigOption_1 = require("../models/V1PodDNSConfigOption");
var V1PodFailurePolicy_1 = require("../models/V1PodFailurePolicy");
var V1PodFailurePolicyOnExitCodesRequirement_1 = require("../models/V1PodFailurePolicyOnExitCodesRequirement");
var V1PodFailurePolicyOnPodConditionsPattern_1 = require("../models/V1PodFailurePolicyOnPodConditionsPattern");
var V1PodFailurePolicyRule_1 = require("../models/V1PodFailurePolicyRule");
var V1PodFailurePolicyRuleOnExitCodes_1 = require("../models/V1PodFailurePolicyRuleOnExitCodes");
var V1PodOS_1 = require("../models/V1PodOS");
var V1PodReadinessGate_1 = require("../models/V1PodReadinessGate");
var V1PodResourceClaim_1 = require("../models/V1PodResourceClaim");
var V1PodResourceClaimSource_1 = require("../models/V1PodResourceClaimSource");
var V1PodSchedulingGate_1 = require("../models/V1PodSchedulingGate");
var V1PodSecurityContext_1 = require("../models/V1PodSecurityContext");
var V1PodSecurityContextSeLinuxOptions_1 = require("../models/V1PodSecurityContextSeLinuxOptions");
var V1PodSecurityContextSeccompProfile_1 = require("../models/V1PodSecurityContextSeccompProfile");
var V1PodSecurityContextWindowsOptions_1 = require("../models/V1PodSecurityContextWindowsOptions");
var V1PodSpec_1 = require("../models/V1PodSpec");
var V1PodSpecAffinity_1 = require("../models/V1PodSpecAffinity");
var V1PodSpecDnsConfig_1 = require("../models/V1PodSpecDnsConfig");
var V1PodSpecOs_1 = require("../models/V1PodSpecOs");
var V1PodSpecSecurityContext_1 = require("../models/V1PodSpecSecurityContext");
var V1PodTemplateSpec_1 = require("../models/V1PodTemplateSpec");
var V1PodTemplateSpecSpec_1 = require("../models/V1PodTemplateSpecSpec");
var V1PortworxVolumeSource_1 = require("../models/V1PortworxVolumeSource");
var V1PreferredSchedulingTerm_1 = require("../models/V1PreferredSchedulingTerm");
var V1PreferredSchedulingTermPreference_1 = require("../models/V1PreferredSchedulingTermPreference");
var V1Probe_1 = require("../models/V1Probe");
var V1ProbeGrpc_1 = require("../models/V1ProbeGrpc");
var V1ProbeTcpSocket_1 = require("../models/V1ProbeTcpSocket");
var V1ProjectedVolumeSource_1 = require("../models/V1ProjectedVolumeSource");
var V1QuobyteVolumeSource_1 = require("../models/V1QuobyteVolumeSource");
var V1RBDVolumeSource_1 = require("../models/V1RBDVolumeSource");
var V1RBDVolumeSourceSecretRef_1 = require("../models/V1RBDVolumeSourceSecretRef");
var V1ResourceClaim_1 = require("../models/V1ResourceClaim");
var V1ResourceFieldSelector_1 = require("../models/V1ResourceFieldSelector");
var V1ResourceFieldSelectorDivisor_1 = require("../models/V1ResourceFieldSelectorDivisor");
var V1ResourceRequirements_1 = require("../models/V1ResourceRequirements");
var V1SELinuxOptions_1 = require("../models/V1SELinuxOptions");
var V1ScaleIOVolumeSource_1 = require("../models/V1ScaleIOVolumeSource");
var V1ScaleIOVolumeSourceSecretRef_1 = require("../models/V1ScaleIOVolumeSourceSecretRef");
var V1SeccompProfile_1 = require("../models/V1SeccompProfile");
var V1SecretEnvSource_1 = require("../models/V1SecretEnvSource");
var V1SecretKeySelector_1 = require("../models/V1SecretKeySelector");
var V1SecretProjection_1 = require("../models/V1SecretProjection");
var V1SecretVolumeSource_1 = require("../models/V1SecretVolumeSource");
var V1SecurityContext_1 = require("../models/V1SecurityContext");
var V1SecurityContextCapabilities_1 = require("../models/V1SecurityContextCapabilities");
var V1SecurityContextSeLinuxOptions_1 = require("../models/V1SecurityContextSeLinuxOptions");
var V1SecurityContextSeccompProfile_1 = require("../models/V1SecurityContextSeccompProfile");
var V1SecurityContextWindowsOptions_1 = require("../models/V1SecurityContextWindowsOptions");
var V1ServiceAccountTokenProjection_1 = require("../models/V1ServiceAccountTokenProjection");
var V1SetupIntent_1 = require("../models/V1SetupIntent");
var V1StorageOSVolumeSource_1 = require("../models/V1StorageOSVolumeSource");
var V1StorageOSVolumeSourceSecretRef_1 = require("../models/V1StorageOSVolumeSourceSecretRef");
var V1Sysctl_1 = require("../models/V1Sysctl");
var V1TCPSocketAction_1 = require("../models/V1TCPSocketAction");
var V1TCPSocketActionPort_1 = require("../models/V1TCPSocketActionPort");
var V1TaxID_1 = require("../models/V1TaxID");
var V1Toleration_1 = require("../models/V1Toleration");
var V1TopologySpreadConstraint_1 = require("../models/V1TopologySpreadConstraint");
var V1TopologySpreadConstraintLabelSelector_1 = require("../models/V1TopologySpreadConstraintLabelSelector");
var V1TypedLocalObjectReference_1 = require("../models/V1TypedLocalObjectReference");
var V1TypedObjectReference_1 = require("../models/V1TypedObjectReference");
var V1UncountedTerminatedPods_1 = require("../models/V1UncountedTerminatedPods");
var V1Volume_1 = require("../models/V1Volume");
var V1VolumeAwsElasticBlockStore_1 = require("../models/V1VolumeAwsElasticBlockStore");
var V1VolumeAzureDisk_1 = require("../models/V1VolumeAzureDisk");
var V1VolumeAzureFile_1 = require("../models/V1VolumeAzureFile");
var V1VolumeCephfs_1 = require("../models/V1VolumeCephfs");
var V1VolumeCinder_1 = require("../models/V1VolumeCinder");
var V1VolumeConfigMap_1 = require("../models/V1VolumeConfigMap");
var V1VolumeCsi_1 = require("../models/V1VolumeCsi");
var V1VolumeDevice_1 = require("../models/V1VolumeDevice");
var V1VolumeDownwardAPI_1 = require("../models/V1VolumeDownwardAPI");
var V1VolumeEmptyDir_1 = require("../models/V1VolumeEmptyDir");
var V1VolumeEphemeral_1 = require("../models/V1VolumeEphemeral");
var V1VolumeFc_1 = require("../models/V1VolumeFc");
var V1VolumeFlexVolume_1 = require("../models/V1VolumeFlexVolume");
var V1VolumeFlocker_1 = require("../models/V1VolumeFlocker");
var V1VolumeGcePersistentDisk_1 = require("../models/V1VolumeGcePersistentDisk");
var V1VolumeGitRepo_1 = require("../models/V1VolumeGitRepo");
var V1VolumeGlusterfs_1 = require("../models/V1VolumeGlusterfs");
var V1VolumeHostPath_1 = require("../models/V1VolumeHostPath");
var V1VolumeIscsi_1 = require("../models/V1VolumeIscsi");
var V1VolumeMount_1 = require("../models/V1VolumeMount");
var V1VolumeNfs_1 = require("../models/V1VolumeNfs");
var V1VolumePersistentVolumeClaim_1 = require("../models/V1VolumePersistentVolumeClaim");
var V1VolumePhotonPersistentDisk_1 = require("../models/V1VolumePhotonPersistentDisk");
var V1VolumePortworxVolume_1 = require("../models/V1VolumePortworxVolume");
var V1VolumeProjected_1 = require("../models/V1VolumeProjected");
var V1VolumeProjection_1 = require("../models/V1VolumeProjection");
var V1VolumeProjectionConfigMap_1 = require("../models/V1VolumeProjectionConfigMap");
var V1VolumeProjectionDownwardAPI_1 = require("../models/V1VolumeProjectionDownwardAPI");
var V1VolumeProjectionSecret_1 = require("../models/V1VolumeProjectionSecret");
var V1VolumeProjectionServiceAccountToken_1 = require("../models/V1VolumeProjectionServiceAccountToken");
var V1VolumeQuobyte_1 = require("../models/V1VolumeQuobyte");
var V1VolumeRbd_1 = require("../models/V1VolumeRbd");
var V1VolumeScaleIO_1 = require("../models/V1VolumeScaleIO");
var V1VolumeSecret_1 = require("../models/V1VolumeSecret");
var V1VolumeStorageos_1 = require("../models/V1VolumeStorageos");
var V1VolumeVsphereVolume_1 = require("../models/V1VolumeVsphereVolume");
var V1VsphereVirtualDiskVolumeSource_1 = require("../models/V1VsphereVirtualDiskVolumeSource");
var V1WeightedPodAffinityTerm_1 = require("../models/V1WeightedPodAffinityTerm");
var V1WeightedPodAffinityTermPodAffinityTerm_1 = require("../models/V1WeightedPodAffinityTermPodAffinityTerm");
var V1WindowsSecurityContextOptions_1 = require("../models/V1WindowsSecurityContextOptions");
var V1alpha1Application_1 = require("../models/V1alpha1Application");
var V1alpha1ApplicationSpec_1 = require("../models/V1alpha1ApplicationSpec");
var V1alpha1ApplicationSpecDomains_1 = require("../models/V1alpha1ApplicationSpecDomains");
var V1alpha1ApplicationStatus_1 = require("../models/V1alpha1ApplicationStatus");
var V1alpha1BlockStorage_1 = require("../models/V1alpha1BlockStorage");
var V1alpha1Domains_1 = require("../models/V1alpha1Domains");
var V1alpha1Export_1 = require("../models/V1alpha1Export");
var V1alpha1ExportBucket_1 = require("../models/V1alpha1ExportBucket");
var V1alpha1ExportMetadata_1 = require("../models/V1alpha1ExportMetadata");
var V1alpha1ExportSchedule_1 = require("../models/V1alpha1ExportSchedule");
var V1alpha1ExportScheduleSpec_1 = require("../models/V1alpha1ExportScheduleSpec");
var V1alpha1ExportScheduleStatus_1 = require("../models/V1alpha1ExportScheduleStatus");
var V1alpha1ExportSpec_1 = require("../models/V1alpha1ExportSpec");
var V1alpha1ExportStatus_1 = require("../models/V1alpha1ExportStatus");
var V1alpha1ExportTarget_1 = require("../models/V1alpha1ExportTarget");
var V1alpha1ExportTargetSpec_1 = require("../models/V1alpha1ExportTargetSpec");
var V1alpha1ExportTargetStatus_1 = require("../models/V1alpha1ExportTargetStatus");
var V1alpha1Features_1 = require("../models/V1alpha1Features");
var V1alpha1Job_1 = require("../models/V1alpha1Job");
var V1alpha1Note_1 = require("../models/V1alpha1Note");
var V1alpha1Template_1 = require("../models/V1alpha1Template");
var V1alpha1TemplateInstance_1 = require("../models/V1alpha1TemplateInstance");
var V1alpha1TemplateStorage_1 = require("../models/V1alpha1TemplateStorage");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([
    "ClientIdentityCredentialsType",
    "ClientIdentityState",
    "IntstrType",
    "K8sIoApiCoreV1ConditionStatus",
    "K8sIoApimachineryPkgApisMetaV1ConditionStatus",
    "ResourceQuantityFormatEnum",
    "StripeInvoiceStatus",
    "StripePaymentMethodType",
    "StripeTaxIDType",
    "V1AzureDataDiskCachingMode",
    "V1AzureDataDiskKind",
    "V1CompletionMode",
    "V1DNSPolicy",
    "V1EmptyDirVolumeSourceSizeLimitFormatEnum",
    "V1HostPathType",
    "V1JobConditionType",
    "V1LabelSelectorOperator",
    "V1ManagedFieldsOperationType",
    "V1MountPropagationMode",
    "V1NodeInclusionPolicy",
    "V1NodeSelectorOperator",
    "V1OSName",
    "V1PersistentVolumeAccessMode",
    "V1PersistentVolumeMode",
    "V1PodConditionType",
    "V1PodFSGroupChangePolicy",
    "V1PodFailurePolicyAction",
    "V1PodFailurePolicyOnExitCodesOperator",
    "V1PreemptionPolicy",
    "V1ProcMountType",
    "V1Protocol",
    "V1PullPolicy",
    "V1ResourceFieldSelectorDivisorFormatEnum",
    "V1ResourceName",
    "V1ResourceResizeRestartPolicy",
    "V1RestartPolicy",
    "V1SeccompProfileType",
    "V1StorageMedium",
    "V1TaintEffect",
    "V1TerminationMessagePolicy",
    "V1TolerationOperator",
    "V1URIScheme",
    "V1UnsatisfiableConstraintAction",
]);
var typeMap = {
    "ClientIdentity": ClientIdentity_1.ClientIdentity,
    "ClientIdentityCredentials": ClientIdentityCredentials_1.ClientIdentityCredentials,
    "ClientIdentityWithCredentials": ClientIdentityWithCredentials_1.ClientIdentityWithCredentials,
    "ClientIdentityWithCredentialsOidc": ClientIdentityWithCredentialsOidc_1.ClientIdentityWithCredentialsOidc,
    "ClientIdentityWithCredentialsOidcConfig": ClientIdentityWithCredentialsOidcConfig_1.ClientIdentityWithCredentialsOidcConfig,
    "ClientIdentityWithCredentialsOidcConfigProvider": ClientIdentityWithCredentialsOidcConfigProvider_1.ClientIdentityWithCredentialsOidcConfigProvider,
    "ClientIdentityWithCredentialsPassword": ClientIdentityWithCredentialsPassword_1.ClientIdentityWithCredentialsPassword,
    "ClientIdentityWithCredentialsPasswordConfig": ClientIdentityWithCredentialsPasswordConfig_1.ClientIdentityWithCredentialsPasswordConfig,
    "ClientRecoveryIdentityAddress": ClientRecoveryIdentityAddress_1.ClientRecoveryIdentityAddress,
    "ClientUpdateIdentityBody": ClientUpdateIdentityBody_1.ClientUpdateIdentityBody,
    "ClientVerifiableIdentityAddress": ClientVerifiableIdentityAddress_1.ClientVerifiableIdentityAddress,
    "IntstrIntOrString": IntstrIntOrString_1.IntstrIntOrString,
    "ModelHistogramBucket": ModelHistogramBucket_1.ModelHistogramBucket,
    "ModelSampleHistogram": ModelSampleHistogram_1.ModelSampleHistogram,
    "ModelSampleHistogramPair": ModelSampleHistogramPair_1.ModelSampleHistogramPair,
    "ModelSampleHistogramPairHistogram": ModelSampleHistogramPairHistogram_1.ModelSampleHistogramPairHistogram,
    "ModelSamplePair": ModelSamplePair_1.ModelSamplePair,
    "ModelSampleStream": ModelSampleStream_1.ModelSampleStream,
    "ResourceQuantity": ResourceQuantity_1.ResourceQuantity,
    "V1AWSElasticBlockStoreVolumeSource": V1AWSElasticBlockStoreVolumeSource_1.V1AWSElasticBlockStoreVolumeSource,
    "V1Account": V1Account_1.V1Account,
    "V1Address": V1Address_1.V1Address,
    "V1Affinity": V1Affinity_1.V1Affinity,
    "V1AffinityNodeAffinity": V1AffinityNodeAffinity_1.V1AffinityNodeAffinity,
    "V1AffinityPodAffinity": V1AffinityPodAffinity_1.V1AffinityPodAffinity,
    "V1AffinityPodAntiAffinity": V1AffinityPodAntiAffinity_1.V1AffinityPodAntiAffinity,
    "V1ApplicationMetrics": V1ApplicationMetrics_1.V1ApplicationMetrics,
    "V1AzureDiskVolumeSource": V1AzureDiskVolumeSource_1.V1AzureDiskVolumeSource,
    "V1AzureFileVolumeSource": V1AzureFileVolumeSource_1.V1AzureFileVolumeSource,
    "V1CSIVolumeSource": V1CSIVolumeSource_1.V1CSIVolumeSource,
    "V1CSIVolumeSourceNodePublishSecretRef": V1CSIVolumeSourceNodePublishSecretRef_1.V1CSIVolumeSourceNodePublishSecretRef,
    "V1Capabilities": V1Capabilities_1.V1Capabilities,
    "V1CephFSVolumeSource": V1CephFSVolumeSource_1.V1CephFSVolumeSource,
    "V1CephFSVolumeSourceSecretRef": V1CephFSVolumeSourceSecretRef_1.V1CephFSVolumeSourceSecretRef,
    "V1CinderVolumeSource": V1CinderVolumeSource_1.V1CinderVolumeSource,
    "V1CinderVolumeSourceSecretRef": V1CinderVolumeSourceSecretRef_1.V1CinderVolumeSourceSecretRef,
    "V1ClaimSource": V1ClaimSource_1.V1ClaimSource,
    "V1Condition": V1Condition_1.V1Condition,
    "V1ConfigMapEnvSource": V1ConfigMapEnvSource_1.V1ConfigMapEnvSource,
    "V1ConfigMapKeySelector": V1ConfigMapKeySelector_1.V1ConfigMapKeySelector,
    "V1ConfigMapProjection": V1ConfigMapProjection_1.V1ConfigMapProjection,
    "V1ConfigMapVolumeSource": V1ConfigMapVolumeSource_1.V1ConfigMapVolumeSource,
    "V1Container": V1Container_1.V1Container,
    "V1ContainerLifecycle": V1ContainerLifecycle_1.V1ContainerLifecycle,
    "V1ContainerLivenessProbe": V1ContainerLivenessProbe_1.V1ContainerLivenessProbe,
    "V1ContainerPort": V1ContainerPort_1.V1ContainerPort,
    "V1ContainerReadinessProbe": V1ContainerReadinessProbe_1.V1ContainerReadinessProbe,
    "V1ContainerResizePolicy": V1ContainerResizePolicy_1.V1ContainerResizePolicy,
    "V1ContainerResources": V1ContainerResources_1.V1ContainerResources,
    "V1ContainerSecurityContext": V1ContainerSecurityContext_1.V1ContainerSecurityContext,
    "V1ContainerStartupProbe": V1ContainerStartupProbe_1.V1ContainerStartupProbe,
    "V1Customer": V1Customer_1.V1Customer,
    "V1DownwardAPIProjection": V1DownwardAPIProjection_1.V1DownwardAPIProjection,
    "V1DownwardAPIVolumeFile": V1DownwardAPIVolumeFile_1.V1DownwardAPIVolumeFile,
    "V1DownwardAPIVolumeFileFieldRef": V1DownwardAPIVolumeFileFieldRef_1.V1DownwardAPIVolumeFileFieldRef,
    "V1DownwardAPIVolumeFileResourceFieldRef": V1DownwardAPIVolumeFileResourceFieldRef_1.V1DownwardAPIVolumeFileResourceFieldRef,
    "V1DownwardAPIVolumeSource": V1DownwardAPIVolumeSource_1.V1DownwardAPIVolumeSource,
    "V1EmptyDirVolumeSource": V1EmptyDirVolumeSource_1.V1EmptyDirVolumeSource,
    "V1EmptyDirVolumeSourceSizeLimit": V1EmptyDirVolumeSourceSizeLimit_1.V1EmptyDirVolumeSourceSizeLimit,
    "V1EnvFromSource": V1EnvFromSource_1.V1EnvFromSource,
    "V1EnvFromSourceConfigMapRef": V1EnvFromSourceConfigMapRef_1.V1EnvFromSourceConfigMapRef,
    "V1EnvFromSourceSecretRef": V1EnvFromSourceSecretRef_1.V1EnvFromSourceSecretRef,
    "V1EnvVar": V1EnvVar_1.V1EnvVar,
    "V1EnvVarSource": V1EnvVarSource_1.V1EnvVarSource,
    "V1EnvVarSourceConfigMapKeyRef": V1EnvVarSourceConfigMapKeyRef_1.V1EnvVarSourceConfigMapKeyRef,
    "V1EnvVarSourceFieldRef": V1EnvVarSourceFieldRef_1.V1EnvVarSourceFieldRef,
    "V1EnvVarSourceResourceFieldRef": V1EnvVarSourceResourceFieldRef_1.V1EnvVarSourceResourceFieldRef,
    "V1EnvVarSourceSecretKeyRef": V1EnvVarSourceSecretKeyRef_1.V1EnvVarSourceSecretKeyRef,
    "V1EnvVarValueFrom": V1EnvVarValueFrom_1.V1EnvVarValueFrom,
    "V1EphemeralContainer": V1EphemeralContainer_1.V1EphemeralContainer,
    "V1EphemeralContainerLifecycle": V1EphemeralContainerLifecycle_1.V1EphemeralContainerLifecycle,
    "V1EphemeralContainerLivenessProbe": V1EphemeralContainerLivenessProbe_1.V1EphemeralContainerLivenessProbe,
    "V1EphemeralContainerResources": V1EphemeralContainerResources_1.V1EphemeralContainerResources,
    "V1EphemeralContainerSecurityContext": V1EphemeralContainerSecurityContext_1.V1EphemeralContainerSecurityContext,
    "V1EphemeralVolumeSource": V1EphemeralVolumeSource_1.V1EphemeralVolumeSource,
    "V1EphemeralVolumeSourceVolumeClaimTemplate": V1EphemeralVolumeSourceVolumeClaimTemplate_1.V1EphemeralVolumeSourceVolumeClaimTemplate,
    "V1ExecAction": V1ExecAction_1.V1ExecAction,
    "V1FCVolumeSource": V1FCVolumeSource_1.V1FCVolumeSource,
    "V1FlexVolumeSource": V1FlexVolumeSource_1.V1FlexVolumeSource,
    "V1FlexVolumeSourceSecretRef": V1FlexVolumeSourceSecretRef_1.V1FlexVolumeSourceSecretRef,
    "V1FlockerVolumeSource": V1FlockerVolumeSource_1.V1FlockerVolumeSource,
    "V1GCEPersistentDiskVolumeSource": V1GCEPersistentDiskVolumeSource_1.V1GCEPersistentDiskVolumeSource,
    "V1GRPCAction": V1GRPCAction_1.V1GRPCAction,
    "V1GitRepoVolumeSource": V1GitRepoVolumeSource_1.V1GitRepoVolumeSource,
    "V1GlusterfsVolumeSource": V1GlusterfsVolumeSource_1.V1GlusterfsVolumeSource,
    "V1HTTPGetAction": V1HTTPGetAction_1.V1HTTPGetAction,
    "V1HTTPGetActionPort": V1HTTPGetActionPort_1.V1HTTPGetActionPort,
    "V1HTTPHeader": V1HTTPHeader_1.V1HTTPHeader,
    "V1HostAlias": V1HostAlias_1.V1HostAlias,
    "V1HostPathVolumeSource": V1HostPathVolumeSource_1.V1HostPathVolumeSource,
    "V1ISCSIVolumeSource": V1ISCSIVolumeSource_1.V1ISCSIVolumeSource,
    "V1ISCSIVolumeSourceSecretRef": V1ISCSIVolumeSourceSecretRef_1.V1ISCSIVolumeSourceSecretRef,
    "V1Invoice": V1Invoice_1.V1Invoice,
    "V1Job": V1Job_1.V1Job,
    "V1JobCondition": V1JobCondition_1.V1JobCondition,
    "V1JobInput": V1JobInput_1.V1JobInput,
    "V1JobMetadata": V1JobMetadata_1.V1JobMetadata,
    "V1JobResponse": V1JobResponse_1.V1JobResponse,
    "V1JobSpec": V1JobSpec_1.V1JobSpec,
    "V1JobSpecPodFailurePolicy": V1JobSpecPodFailurePolicy_1.V1JobSpecPodFailurePolicy,
    "V1JobSpecSelector": V1JobSpecSelector_1.V1JobSpecSelector,
    "V1JobSpecTemplate": V1JobSpecTemplate_1.V1JobSpecTemplate,
    "V1JobStatus": V1JobStatus_1.V1JobStatus,
    "V1JobStatusUncountedTerminatedPods": V1JobStatusUncountedTerminatedPods_1.V1JobStatusUncountedTerminatedPods,
    "V1KeyToPath": V1KeyToPath_1.V1KeyToPath,
    "V1LabelSelector": V1LabelSelector_1.V1LabelSelector,
    "V1LabelSelectorRequirement": V1LabelSelectorRequirement_1.V1LabelSelectorRequirement,
    "V1Lifecycle": V1Lifecycle_1.V1Lifecycle,
    "V1LifecycleHandler": V1LifecycleHandler_1.V1LifecycleHandler,
    "V1LifecycleHandlerExec": V1LifecycleHandlerExec_1.V1LifecycleHandlerExec,
    "V1LifecycleHandlerHttpGet": V1LifecycleHandlerHttpGet_1.V1LifecycleHandlerHttpGet,
    "V1LifecycleHandlerTcpSocket": V1LifecycleHandlerTcpSocket_1.V1LifecycleHandlerTcpSocket,
    "V1LifecyclePostStart": V1LifecyclePostStart_1.V1LifecyclePostStart,
    "V1LifecyclePreStop": V1LifecyclePreStop_1.V1LifecyclePreStop,
    "V1LocalObjectReference": V1LocalObjectReference_1.V1LocalObjectReference,
    "V1ManagedFieldsEntry": V1ManagedFieldsEntry_1.V1ManagedFieldsEntry,
    "V1NFSVolumeSource": V1NFSVolumeSource_1.V1NFSVolumeSource,
    "V1NodeAffinity": V1NodeAffinity_1.V1NodeAffinity,
    "V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution": V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution_1.V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution,
    "V1NodeSelector": V1NodeSelector_1.V1NodeSelector,
    "V1NodeSelectorRequirement": V1NodeSelectorRequirement_1.V1NodeSelectorRequirement,
    "V1NodeSelectorTerm": V1NodeSelectorTerm_1.V1NodeSelectorTerm,
    "V1ObjectFieldSelector": V1ObjectFieldSelector_1.V1ObjectFieldSelector,
    "V1ObjectMeta": V1ObjectMeta_1.V1ObjectMeta,
    "V1OwnerReference": V1OwnerReference_1.V1OwnerReference,
    "V1PaymentMethod": V1PaymentMethod_1.V1PaymentMethod,
    "V1PersistentVolumeClaimSpec": V1PersistentVolumeClaimSpec_1.V1PersistentVolumeClaimSpec,
    "V1PersistentVolumeClaimSpecDataSource": V1PersistentVolumeClaimSpecDataSource_1.V1PersistentVolumeClaimSpecDataSource,
    "V1PersistentVolumeClaimSpecDataSourceRef": V1PersistentVolumeClaimSpecDataSourceRef_1.V1PersistentVolumeClaimSpecDataSourceRef,
    "V1PersistentVolumeClaimSpecResources": V1PersistentVolumeClaimSpecResources_1.V1PersistentVolumeClaimSpecResources,
    "V1PersistentVolumeClaimSpecSelector": V1PersistentVolumeClaimSpecSelector_1.V1PersistentVolumeClaimSpecSelector,
    "V1PersistentVolumeClaimTemplate": V1PersistentVolumeClaimTemplate_1.V1PersistentVolumeClaimTemplate,
    "V1PersistentVolumeClaimTemplateMetadata": V1PersistentVolumeClaimTemplateMetadata_1.V1PersistentVolumeClaimTemplateMetadata,
    "V1PersistentVolumeClaimTemplateSpec": V1PersistentVolumeClaimTemplateSpec_1.V1PersistentVolumeClaimTemplateSpec,
    "V1PersistentVolumeClaimVolumeSource": V1PersistentVolumeClaimVolumeSource_1.V1PersistentVolumeClaimVolumeSource,
    "V1PhotonPersistentDiskVolumeSource": V1PhotonPersistentDiskVolumeSource_1.V1PhotonPersistentDiskVolumeSource,
    "V1PodAffinity": V1PodAffinity_1.V1PodAffinity,
    "V1PodAffinityTerm": V1PodAffinityTerm_1.V1PodAffinityTerm,
    "V1PodAffinityTermLabelSelector": V1PodAffinityTermLabelSelector_1.V1PodAffinityTermLabelSelector,
    "V1PodAffinityTermNamespaceSelector": V1PodAffinityTermNamespaceSelector_1.V1PodAffinityTermNamespaceSelector,
    "V1PodAntiAffinity": V1PodAntiAffinity_1.V1PodAntiAffinity,
    "V1PodDNSConfig": V1PodDNSConfig_1.V1PodDNSConfig,
    "V1PodDNSConfigOption": V1PodDNSConfigOption_1.V1PodDNSConfigOption,
    "V1PodFailurePolicy": V1PodFailurePolicy_1.V1PodFailurePolicy,
    "V1PodFailurePolicyOnExitCodesRequirement": V1PodFailurePolicyOnExitCodesRequirement_1.V1PodFailurePolicyOnExitCodesRequirement,
    "V1PodFailurePolicyOnPodConditionsPattern": V1PodFailurePolicyOnPodConditionsPattern_1.V1PodFailurePolicyOnPodConditionsPattern,
    "V1PodFailurePolicyRule": V1PodFailurePolicyRule_1.V1PodFailurePolicyRule,
    "V1PodFailurePolicyRuleOnExitCodes": V1PodFailurePolicyRuleOnExitCodes_1.V1PodFailurePolicyRuleOnExitCodes,
    "V1PodOS": V1PodOS_1.V1PodOS,
    "V1PodReadinessGate": V1PodReadinessGate_1.V1PodReadinessGate,
    "V1PodResourceClaim": V1PodResourceClaim_1.V1PodResourceClaim,
    "V1PodResourceClaimSource": V1PodResourceClaimSource_1.V1PodResourceClaimSource,
    "V1PodSchedulingGate": V1PodSchedulingGate_1.V1PodSchedulingGate,
    "V1PodSecurityContext": V1PodSecurityContext_1.V1PodSecurityContext,
    "V1PodSecurityContextSeLinuxOptions": V1PodSecurityContextSeLinuxOptions_1.V1PodSecurityContextSeLinuxOptions,
    "V1PodSecurityContextSeccompProfile": V1PodSecurityContextSeccompProfile_1.V1PodSecurityContextSeccompProfile,
    "V1PodSecurityContextWindowsOptions": V1PodSecurityContextWindowsOptions_1.V1PodSecurityContextWindowsOptions,
    "V1PodSpec": V1PodSpec_1.V1PodSpec,
    "V1PodSpecAffinity": V1PodSpecAffinity_1.V1PodSpecAffinity,
    "V1PodSpecDnsConfig": V1PodSpecDnsConfig_1.V1PodSpecDnsConfig,
    "V1PodSpecOs": V1PodSpecOs_1.V1PodSpecOs,
    "V1PodSpecSecurityContext": V1PodSpecSecurityContext_1.V1PodSpecSecurityContext,
    "V1PodTemplateSpec": V1PodTemplateSpec_1.V1PodTemplateSpec,
    "V1PodTemplateSpecSpec": V1PodTemplateSpecSpec_1.V1PodTemplateSpecSpec,
    "V1PortworxVolumeSource": V1PortworxVolumeSource_1.V1PortworxVolumeSource,
    "V1PreferredSchedulingTerm": V1PreferredSchedulingTerm_1.V1PreferredSchedulingTerm,
    "V1PreferredSchedulingTermPreference": V1PreferredSchedulingTermPreference_1.V1PreferredSchedulingTermPreference,
    "V1Probe": V1Probe_1.V1Probe,
    "V1ProbeGrpc": V1ProbeGrpc_1.V1ProbeGrpc,
    "V1ProbeTcpSocket": V1ProbeTcpSocket_1.V1ProbeTcpSocket,
    "V1ProjectedVolumeSource": V1ProjectedVolumeSource_1.V1ProjectedVolumeSource,
    "V1QuobyteVolumeSource": V1QuobyteVolumeSource_1.V1QuobyteVolumeSource,
    "V1RBDVolumeSource": V1RBDVolumeSource_1.V1RBDVolumeSource,
    "V1RBDVolumeSourceSecretRef": V1RBDVolumeSourceSecretRef_1.V1RBDVolumeSourceSecretRef,
    "V1ResourceClaim": V1ResourceClaim_1.V1ResourceClaim,
    "V1ResourceFieldSelector": V1ResourceFieldSelector_1.V1ResourceFieldSelector,
    "V1ResourceFieldSelectorDivisor": V1ResourceFieldSelectorDivisor_1.V1ResourceFieldSelectorDivisor,
    "V1ResourceRequirements": V1ResourceRequirements_1.V1ResourceRequirements,
    "V1SELinuxOptions": V1SELinuxOptions_1.V1SELinuxOptions,
    "V1ScaleIOVolumeSource": V1ScaleIOVolumeSource_1.V1ScaleIOVolumeSource,
    "V1ScaleIOVolumeSourceSecretRef": V1ScaleIOVolumeSourceSecretRef_1.V1ScaleIOVolumeSourceSecretRef,
    "V1SeccompProfile": V1SeccompProfile_1.V1SeccompProfile,
    "V1SecretEnvSource": V1SecretEnvSource_1.V1SecretEnvSource,
    "V1SecretKeySelector": V1SecretKeySelector_1.V1SecretKeySelector,
    "V1SecretProjection": V1SecretProjection_1.V1SecretProjection,
    "V1SecretVolumeSource": V1SecretVolumeSource_1.V1SecretVolumeSource,
    "V1SecurityContext": V1SecurityContext_1.V1SecurityContext,
    "V1SecurityContextCapabilities": V1SecurityContextCapabilities_1.V1SecurityContextCapabilities,
    "V1SecurityContextSeLinuxOptions": V1SecurityContextSeLinuxOptions_1.V1SecurityContextSeLinuxOptions,
    "V1SecurityContextSeccompProfile": V1SecurityContextSeccompProfile_1.V1SecurityContextSeccompProfile,
    "V1SecurityContextWindowsOptions": V1SecurityContextWindowsOptions_1.V1SecurityContextWindowsOptions,
    "V1ServiceAccountTokenProjection": V1ServiceAccountTokenProjection_1.V1ServiceAccountTokenProjection,
    "V1SetupIntent": V1SetupIntent_1.V1SetupIntent,
    "V1StorageOSVolumeSource": V1StorageOSVolumeSource_1.V1StorageOSVolumeSource,
    "V1StorageOSVolumeSourceSecretRef": V1StorageOSVolumeSourceSecretRef_1.V1StorageOSVolumeSourceSecretRef,
    "V1Sysctl": V1Sysctl_1.V1Sysctl,
    "V1TCPSocketAction": V1TCPSocketAction_1.V1TCPSocketAction,
    "V1TCPSocketActionPort": V1TCPSocketActionPort_1.V1TCPSocketActionPort,
    "V1TaxID": V1TaxID_1.V1TaxID,
    "V1Toleration": V1Toleration_1.V1Toleration,
    "V1TopologySpreadConstraint": V1TopologySpreadConstraint_1.V1TopologySpreadConstraint,
    "V1TopologySpreadConstraintLabelSelector": V1TopologySpreadConstraintLabelSelector_1.V1TopologySpreadConstraintLabelSelector,
    "V1TypedLocalObjectReference": V1TypedLocalObjectReference_1.V1TypedLocalObjectReference,
    "V1TypedObjectReference": V1TypedObjectReference_1.V1TypedObjectReference,
    "V1UncountedTerminatedPods": V1UncountedTerminatedPods_1.V1UncountedTerminatedPods,
    "V1Volume": V1Volume_1.V1Volume,
    "V1VolumeAwsElasticBlockStore": V1VolumeAwsElasticBlockStore_1.V1VolumeAwsElasticBlockStore,
    "V1VolumeAzureDisk": V1VolumeAzureDisk_1.V1VolumeAzureDisk,
    "V1VolumeAzureFile": V1VolumeAzureFile_1.V1VolumeAzureFile,
    "V1VolumeCephfs": V1VolumeCephfs_1.V1VolumeCephfs,
    "V1VolumeCinder": V1VolumeCinder_1.V1VolumeCinder,
    "V1VolumeConfigMap": V1VolumeConfigMap_1.V1VolumeConfigMap,
    "V1VolumeCsi": V1VolumeCsi_1.V1VolumeCsi,
    "V1VolumeDevice": V1VolumeDevice_1.V1VolumeDevice,
    "V1VolumeDownwardAPI": V1VolumeDownwardAPI_1.V1VolumeDownwardAPI,
    "V1VolumeEmptyDir": V1VolumeEmptyDir_1.V1VolumeEmptyDir,
    "V1VolumeEphemeral": V1VolumeEphemeral_1.V1VolumeEphemeral,
    "V1VolumeFc": V1VolumeFc_1.V1VolumeFc,
    "V1VolumeFlexVolume": V1VolumeFlexVolume_1.V1VolumeFlexVolume,
    "V1VolumeFlocker": V1VolumeFlocker_1.V1VolumeFlocker,
    "V1VolumeGcePersistentDisk": V1VolumeGcePersistentDisk_1.V1VolumeGcePersistentDisk,
    "V1VolumeGitRepo": V1VolumeGitRepo_1.V1VolumeGitRepo,
    "V1VolumeGlusterfs": V1VolumeGlusterfs_1.V1VolumeGlusterfs,
    "V1VolumeHostPath": V1VolumeHostPath_1.V1VolumeHostPath,
    "V1VolumeIscsi": V1VolumeIscsi_1.V1VolumeIscsi,
    "V1VolumeMount": V1VolumeMount_1.V1VolumeMount,
    "V1VolumeNfs": V1VolumeNfs_1.V1VolumeNfs,
    "V1VolumePersistentVolumeClaim": V1VolumePersistentVolumeClaim_1.V1VolumePersistentVolumeClaim,
    "V1VolumePhotonPersistentDisk": V1VolumePhotonPersistentDisk_1.V1VolumePhotonPersistentDisk,
    "V1VolumePortworxVolume": V1VolumePortworxVolume_1.V1VolumePortworxVolume,
    "V1VolumeProjected": V1VolumeProjected_1.V1VolumeProjected,
    "V1VolumeProjection": V1VolumeProjection_1.V1VolumeProjection,
    "V1VolumeProjectionConfigMap": V1VolumeProjectionConfigMap_1.V1VolumeProjectionConfigMap,
    "V1VolumeProjectionDownwardAPI": V1VolumeProjectionDownwardAPI_1.V1VolumeProjectionDownwardAPI,
    "V1VolumeProjectionSecret": V1VolumeProjectionSecret_1.V1VolumeProjectionSecret,
    "V1VolumeProjectionServiceAccountToken": V1VolumeProjectionServiceAccountToken_1.V1VolumeProjectionServiceAccountToken,
    "V1VolumeQuobyte": V1VolumeQuobyte_1.V1VolumeQuobyte,
    "V1VolumeRbd": V1VolumeRbd_1.V1VolumeRbd,
    "V1VolumeScaleIO": V1VolumeScaleIO_1.V1VolumeScaleIO,
    "V1VolumeSecret": V1VolumeSecret_1.V1VolumeSecret,
    "V1VolumeStorageos": V1VolumeStorageos_1.V1VolumeStorageos,
    "V1VolumeVsphereVolume": V1VolumeVsphereVolume_1.V1VolumeVsphereVolume,
    "V1VsphereVirtualDiskVolumeSource": V1VsphereVirtualDiskVolumeSource_1.V1VsphereVirtualDiskVolumeSource,
    "V1WeightedPodAffinityTerm": V1WeightedPodAffinityTerm_1.V1WeightedPodAffinityTerm,
    "V1WeightedPodAffinityTermPodAffinityTerm": V1WeightedPodAffinityTermPodAffinityTerm_1.V1WeightedPodAffinityTermPodAffinityTerm,
    "V1WindowsSecurityContextOptions": V1WindowsSecurityContextOptions_1.V1WindowsSecurityContextOptions,
    "V1alpha1Application": V1alpha1Application_1.V1alpha1Application,
    "V1alpha1ApplicationSpec": V1alpha1ApplicationSpec_1.V1alpha1ApplicationSpec,
    "V1alpha1ApplicationSpecDomains": V1alpha1ApplicationSpecDomains_1.V1alpha1ApplicationSpecDomains,
    "V1alpha1ApplicationStatus": V1alpha1ApplicationStatus_1.V1alpha1ApplicationStatus,
    "V1alpha1BlockStorage": V1alpha1BlockStorage_1.V1alpha1BlockStorage,
    "V1alpha1Domains": V1alpha1Domains_1.V1alpha1Domains,
    "V1alpha1Export": V1alpha1Export_1.V1alpha1Export,
    "V1alpha1ExportBucket": V1alpha1ExportBucket_1.V1alpha1ExportBucket,
    "V1alpha1ExportMetadata": V1alpha1ExportMetadata_1.V1alpha1ExportMetadata,
    "V1alpha1ExportSchedule": V1alpha1ExportSchedule_1.V1alpha1ExportSchedule,
    "V1alpha1ExportScheduleSpec": V1alpha1ExportScheduleSpec_1.V1alpha1ExportScheduleSpec,
    "V1alpha1ExportScheduleStatus": V1alpha1ExportScheduleStatus_1.V1alpha1ExportScheduleStatus,
    "V1alpha1ExportSpec": V1alpha1ExportSpec_1.V1alpha1ExportSpec,
    "V1alpha1ExportStatus": V1alpha1ExportStatus_1.V1alpha1ExportStatus,
    "V1alpha1ExportTarget": V1alpha1ExportTarget_1.V1alpha1ExportTarget,
    "V1alpha1ExportTargetSpec": V1alpha1ExportTargetSpec_1.V1alpha1ExportTargetSpec,
    "V1alpha1ExportTargetStatus": V1alpha1ExportTargetStatus_1.V1alpha1ExportTargetStatus,
    "V1alpha1Features": V1alpha1Features_1.V1alpha1Features,
    "V1alpha1Job": V1alpha1Job_1.V1alpha1Job,
    "V1alpha1Note": V1alpha1Note_1.V1alpha1Note,
    "V1alpha1Template": V1alpha1Template_1.V1alpha1Template,
    "V1alpha1TemplateInstance": V1alpha1TemplateInstance_1.V1alpha1TemplateInstance,
    "V1alpha1TemplateStorage": V1alpha1TemplateStorage_1.V1alpha1TemplateStorage,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map