import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ClientIdentity } from '../models/ClientIdentity';
import { ClientIdentityCredentials } from '../models/ClientIdentityCredentials';
import { ClientIdentityCredentialsType } from '../models/ClientIdentityCredentialsType';
import { ClientIdentityState } from '../models/ClientIdentityState';
import { ClientIdentityWithCredentials } from '../models/ClientIdentityWithCredentials';
import { ClientIdentityWithCredentialsOidc } from '../models/ClientIdentityWithCredentialsOidc';
import { ClientIdentityWithCredentialsOidcConfig } from '../models/ClientIdentityWithCredentialsOidcConfig';
import { ClientIdentityWithCredentialsOidcConfigProvider } from '../models/ClientIdentityWithCredentialsOidcConfigProvider';
import { ClientIdentityWithCredentialsPassword } from '../models/ClientIdentityWithCredentialsPassword';
import { ClientIdentityWithCredentialsPasswordConfig } from '../models/ClientIdentityWithCredentialsPasswordConfig';
import { ClientRecoveryIdentityAddress } from '../models/ClientRecoveryIdentityAddress';
import { ClientUpdateIdentityBody } from '../models/ClientUpdateIdentityBody';
import { ClientVerifiableIdentityAddress } from '../models/ClientVerifiableIdentityAddress';
import { IntstrIntOrString } from '../models/IntstrIntOrString';
import { IntstrType } from '../models/IntstrType';
import { K8sIoApiCoreV1ConditionStatus } from '../models/K8sIoApiCoreV1ConditionStatus';
import { K8sIoApimachineryPkgApisMetaV1ConditionStatus } from '../models/K8sIoApimachineryPkgApisMetaV1ConditionStatus';
import { ModelHistogramBucket } from '../models/ModelHistogramBucket';
import { ModelSampleHistogram } from '../models/ModelSampleHistogram';
import { ModelSampleHistogramPair } from '../models/ModelSampleHistogramPair';
import { ModelSampleHistogramPairHistogram } from '../models/ModelSampleHistogramPairHistogram';
import { ModelSamplePair } from '../models/ModelSamplePair';
import { ModelSampleStream } from '../models/ModelSampleStream';
import { ResourceQuantity } from '../models/ResourceQuantity';
import { StripeInvoiceStatus } from '../models/StripeInvoiceStatus';
import { StripePaymentMethodType } from '../models/StripePaymentMethodType';
import { StripeTaxIDType } from '../models/StripeTaxIDType';
import { V1AWSElasticBlockStoreVolumeSource } from '../models/V1AWSElasticBlockStoreVolumeSource';
import { V1Account } from '../models/V1Account';
import { V1Address } from '../models/V1Address';
import { V1Affinity } from '../models/V1Affinity';
import { V1AffinityNodeAffinity } from '../models/V1AffinityNodeAffinity';
import { V1AffinityPodAffinity } from '../models/V1AffinityPodAffinity';
import { V1AffinityPodAntiAffinity } from '../models/V1AffinityPodAntiAffinity';
import { V1ApplicationMetrics } from '../models/V1ApplicationMetrics';
import { V1AzureDataDiskCachingMode } from '../models/V1AzureDataDiskCachingMode';
import { V1AzureDataDiskKind } from '../models/V1AzureDataDiskKind';
import { V1AzureDiskVolumeSource } from '../models/V1AzureDiskVolumeSource';
import { V1AzureFileVolumeSource } from '../models/V1AzureFileVolumeSource';
import { V1CSIVolumeSource } from '../models/V1CSIVolumeSource';
import { V1CSIVolumeSourceNodePublishSecretRef } from '../models/V1CSIVolumeSourceNodePublishSecretRef';
import { V1Capabilities } from '../models/V1Capabilities';
import { V1CephFSVolumeSource } from '../models/V1CephFSVolumeSource';
import { V1CephFSVolumeSourceSecretRef } from '../models/V1CephFSVolumeSourceSecretRef';
import { V1CinderVolumeSource } from '../models/V1CinderVolumeSource';
import { V1CinderVolumeSourceSecretRef } from '../models/V1CinderVolumeSourceSecretRef';
import { V1ClaimSource } from '../models/V1ClaimSource';
import { V1CompletionMode } from '../models/V1CompletionMode';
import { V1Condition } from '../models/V1Condition';
import { V1ConfigMapEnvSource } from '../models/V1ConfigMapEnvSource';
import { V1ConfigMapKeySelector } from '../models/V1ConfigMapKeySelector';
import { V1ConfigMapProjection } from '../models/V1ConfigMapProjection';
import { V1ConfigMapVolumeSource } from '../models/V1ConfigMapVolumeSource';
import { V1Container } from '../models/V1Container';
import { V1ContainerLifecycle } from '../models/V1ContainerLifecycle';
import { V1ContainerLivenessProbe } from '../models/V1ContainerLivenessProbe';
import { V1ContainerPort } from '../models/V1ContainerPort';
import { V1ContainerReadinessProbe } from '../models/V1ContainerReadinessProbe';
import { V1ContainerResizePolicy } from '../models/V1ContainerResizePolicy';
import { V1ContainerResources } from '../models/V1ContainerResources';
import { V1ContainerSecurityContext } from '../models/V1ContainerSecurityContext';
import { V1ContainerStartupProbe } from '../models/V1ContainerStartupProbe';
import { V1Customer } from '../models/V1Customer';
import { V1DNSPolicy } from '../models/V1DNSPolicy';
import { V1DownwardAPIProjection } from '../models/V1DownwardAPIProjection';
import { V1DownwardAPIVolumeFile } from '../models/V1DownwardAPIVolumeFile';
import { V1DownwardAPIVolumeFileFieldRef } from '../models/V1DownwardAPIVolumeFileFieldRef';
import { V1DownwardAPIVolumeFileResourceFieldRef } from '../models/V1DownwardAPIVolumeFileResourceFieldRef';
import { V1DownwardAPIVolumeSource } from '../models/V1DownwardAPIVolumeSource';
import { V1EmptyDirVolumeSource } from '../models/V1EmptyDirVolumeSource';
import { V1EmptyDirVolumeSourceSizeLimit } from '../models/V1EmptyDirVolumeSourceSizeLimit';
import { V1EnvFromSource } from '../models/V1EnvFromSource';
import { V1EnvFromSourceConfigMapRef } from '../models/V1EnvFromSourceConfigMapRef';
import { V1EnvFromSourceSecretRef } from '../models/V1EnvFromSourceSecretRef';
import { V1EnvVar } from '../models/V1EnvVar';
import { V1EnvVarSource } from '../models/V1EnvVarSource';
import { V1EnvVarSourceConfigMapKeyRef } from '../models/V1EnvVarSourceConfigMapKeyRef';
import { V1EnvVarSourceFieldRef } from '../models/V1EnvVarSourceFieldRef';
import { V1EnvVarSourceResourceFieldRef } from '../models/V1EnvVarSourceResourceFieldRef';
import { V1EnvVarSourceSecretKeyRef } from '../models/V1EnvVarSourceSecretKeyRef';
import { V1EnvVarValueFrom } from '../models/V1EnvVarValueFrom';
import { V1EphemeralContainer } from '../models/V1EphemeralContainer';
import { V1EphemeralContainerLifecycle } from '../models/V1EphemeralContainerLifecycle';
import { V1EphemeralContainerLivenessProbe } from '../models/V1EphemeralContainerLivenessProbe';
import { V1EphemeralContainerResources } from '../models/V1EphemeralContainerResources';
import { V1EphemeralContainerSecurityContext } from '../models/V1EphemeralContainerSecurityContext';
import { V1EphemeralVolumeSource } from '../models/V1EphemeralVolumeSource';
import { V1EphemeralVolumeSourceVolumeClaimTemplate } from '../models/V1EphemeralVolumeSourceVolumeClaimTemplate';
import { V1ExecAction } from '../models/V1ExecAction';
import { V1FCVolumeSource } from '../models/V1FCVolumeSource';
import { V1FlexVolumeSource } from '../models/V1FlexVolumeSource';
import { V1FlexVolumeSourceSecretRef } from '../models/V1FlexVolumeSourceSecretRef';
import { V1FlockerVolumeSource } from '../models/V1FlockerVolumeSource';
import { V1GCEPersistentDiskVolumeSource } from '../models/V1GCEPersistentDiskVolumeSource';
import { V1GRPCAction } from '../models/V1GRPCAction';
import { V1GitRepoVolumeSource } from '../models/V1GitRepoVolumeSource';
import { V1GlusterfsVolumeSource } from '../models/V1GlusterfsVolumeSource';
import { V1HTTPGetAction } from '../models/V1HTTPGetAction';
import { V1HTTPGetActionPort } from '../models/V1HTTPGetActionPort';
import { V1HTTPHeader } from '../models/V1HTTPHeader';
import { V1HostAlias } from '../models/V1HostAlias';
import { V1HostPathType } from '../models/V1HostPathType';
import { V1HostPathVolumeSource } from '../models/V1HostPathVolumeSource';
import { V1ISCSIVolumeSource } from '../models/V1ISCSIVolumeSource';
import { V1ISCSIVolumeSourceSecretRef } from '../models/V1ISCSIVolumeSourceSecretRef';
import { V1Invoice } from '../models/V1Invoice';
import { V1Job } from '../models/V1Job';
import { V1JobCondition } from '../models/V1JobCondition';
import { V1JobConditionType } from '../models/V1JobConditionType';
import { V1JobInput } from '../models/V1JobInput';
import { V1JobMetadata } from '../models/V1JobMetadata';
import { V1JobResponse } from '../models/V1JobResponse';
import { V1JobSpec } from '../models/V1JobSpec';
import { V1JobSpecPodFailurePolicy } from '../models/V1JobSpecPodFailurePolicy';
import { V1JobSpecSelector } from '../models/V1JobSpecSelector';
import { V1JobSpecTemplate } from '../models/V1JobSpecTemplate';
import { V1JobStatus } from '../models/V1JobStatus';
import { V1JobStatusUncountedTerminatedPods } from '../models/V1JobStatusUncountedTerminatedPods';
import { V1KeyToPath } from '../models/V1KeyToPath';
import { V1LabelSelector } from '../models/V1LabelSelector';
import { V1LabelSelectorOperator } from '../models/V1LabelSelectorOperator';
import { V1LabelSelectorRequirement } from '../models/V1LabelSelectorRequirement';
import { V1Lifecycle } from '../models/V1Lifecycle';
import { V1LifecycleHandler } from '../models/V1LifecycleHandler';
import { V1LifecycleHandlerExec } from '../models/V1LifecycleHandlerExec';
import { V1LifecycleHandlerHttpGet } from '../models/V1LifecycleHandlerHttpGet';
import { V1LifecycleHandlerTcpSocket } from '../models/V1LifecycleHandlerTcpSocket';
import { V1LifecyclePostStart } from '../models/V1LifecyclePostStart';
import { V1LifecyclePreStop } from '../models/V1LifecyclePreStop';
import { V1LocalObjectReference } from '../models/V1LocalObjectReference';
import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1ManagedFieldsOperationType } from '../models/V1ManagedFieldsOperationType';
import { V1MountPropagationMode } from '../models/V1MountPropagationMode';
import { V1NFSVolumeSource } from '../models/V1NFSVolumeSource';
import { V1NodeAffinity } from '../models/V1NodeAffinity';
import { V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution } from '../models/V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution';
import { V1NodeInclusionPolicy } from '../models/V1NodeInclusionPolicy';
import { V1NodeSelector } from '../models/V1NodeSelector';
import { V1NodeSelectorOperator } from '../models/V1NodeSelectorOperator';
import { V1NodeSelectorRequirement } from '../models/V1NodeSelectorRequirement';
import { V1NodeSelectorTerm } from '../models/V1NodeSelectorTerm';
import { V1OSName } from '../models/V1OSName';
import { V1ObjectFieldSelector } from '../models/V1ObjectFieldSelector';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1OwnerReference } from '../models/V1OwnerReference';
import { V1PaymentMethod } from '../models/V1PaymentMethod';
import { V1PersistentVolumeAccessMode } from '../models/V1PersistentVolumeAccessMode';
import { V1PersistentVolumeClaimSpec } from '../models/V1PersistentVolumeClaimSpec';
import { V1PersistentVolumeClaimSpecDataSource } from '../models/V1PersistentVolumeClaimSpecDataSource';
import { V1PersistentVolumeClaimSpecDataSourceRef } from '../models/V1PersistentVolumeClaimSpecDataSourceRef';
import { V1PersistentVolumeClaimSpecResources } from '../models/V1PersistentVolumeClaimSpecResources';
import { V1PersistentVolumeClaimSpecSelector } from '../models/V1PersistentVolumeClaimSpecSelector';
import { V1PersistentVolumeClaimTemplate } from '../models/V1PersistentVolumeClaimTemplate';
import { V1PersistentVolumeClaimTemplateMetadata } from '../models/V1PersistentVolumeClaimTemplateMetadata';
import { V1PersistentVolumeClaimTemplateSpec } from '../models/V1PersistentVolumeClaimTemplateSpec';
import { V1PersistentVolumeClaimVolumeSource } from '../models/V1PersistentVolumeClaimVolumeSource';
import { V1PersistentVolumeMode } from '../models/V1PersistentVolumeMode';
import { V1PhotonPersistentDiskVolumeSource } from '../models/V1PhotonPersistentDiskVolumeSource';
import { V1PodAffinity } from '../models/V1PodAffinity';
import { V1PodAffinityTerm } from '../models/V1PodAffinityTerm';
import { V1PodAffinityTermLabelSelector } from '../models/V1PodAffinityTermLabelSelector';
import { V1PodAffinityTermNamespaceSelector } from '../models/V1PodAffinityTermNamespaceSelector';
import { V1PodAntiAffinity } from '../models/V1PodAntiAffinity';
import { V1PodConditionType } from '../models/V1PodConditionType';
import { V1PodDNSConfig } from '../models/V1PodDNSConfig';
import { V1PodDNSConfigOption } from '../models/V1PodDNSConfigOption';
import { V1PodFSGroupChangePolicy } from '../models/V1PodFSGroupChangePolicy';
import { V1PodFailurePolicy } from '../models/V1PodFailurePolicy';
import { V1PodFailurePolicyAction } from '../models/V1PodFailurePolicyAction';
import { V1PodFailurePolicyOnExitCodesOperator } from '../models/V1PodFailurePolicyOnExitCodesOperator';
import { V1PodFailurePolicyOnExitCodesRequirement } from '../models/V1PodFailurePolicyOnExitCodesRequirement';
import { V1PodFailurePolicyOnPodConditionsPattern } from '../models/V1PodFailurePolicyOnPodConditionsPattern';
import { V1PodFailurePolicyRule } from '../models/V1PodFailurePolicyRule';
import { V1PodFailurePolicyRuleOnExitCodes } from '../models/V1PodFailurePolicyRuleOnExitCodes';
import { V1PodOS } from '../models/V1PodOS';
import { V1PodReadinessGate } from '../models/V1PodReadinessGate';
import { V1PodResourceClaim } from '../models/V1PodResourceClaim';
import { V1PodResourceClaimSource } from '../models/V1PodResourceClaimSource';
import { V1PodSchedulingGate } from '../models/V1PodSchedulingGate';
import { V1PodSecurityContext } from '../models/V1PodSecurityContext';
import { V1PodSecurityContextSeLinuxOptions } from '../models/V1PodSecurityContextSeLinuxOptions';
import { V1PodSecurityContextSeccompProfile } from '../models/V1PodSecurityContextSeccompProfile';
import { V1PodSecurityContextWindowsOptions } from '../models/V1PodSecurityContextWindowsOptions';
import { V1PodSpec } from '../models/V1PodSpec';
import { V1PodSpecAffinity } from '../models/V1PodSpecAffinity';
import { V1PodSpecDnsConfig } from '../models/V1PodSpecDnsConfig';
import { V1PodSpecOs } from '../models/V1PodSpecOs';
import { V1PodSpecSecurityContext } from '../models/V1PodSpecSecurityContext';
import { V1PodTemplateSpec } from '../models/V1PodTemplateSpec';
import { V1PodTemplateSpecSpec } from '../models/V1PodTemplateSpecSpec';
import { V1PortworxVolumeSource } from '../models/V1PortworxVolumeSource';
import { V1PreemptionPolicy } from '../models/V1PreemptionPolicy';
import { V1PreferredSchedulingTerm } from '../models/V1PreferredSchedulingTerm';
import { V1PreferredSchedulingTermPreference } from '../models/V1PreferredSchedulingTermPreference';
import { V1Probe } from '../models/V1Probe';
import { V1ProbeGrpc } from '../models/V1ProbeGrpc';
import { V1ProbeTcpSocket } from '../models/V1ProbeTcpSocket';
import { V1ProcMountType } from '../models/V1ProcMountType';
import { V1ProjectedVolumeSource } from '../models/V1ProjectedVolumeSource';
import { V1Protocol } from '../models/V1Protocol';
import { V1PullPolicy } from '../models/V1PullPolicy';
import { V1QuobyteVolumeSource } from '../models/V1QuobyteVolumeSource';
import { V1RBDVolumeSource } from '../models/V1RBDVolumeSource';
import { V1RBDVolumeSourceSecretRef } from '../models/V1RBDVolumeSourceSecretRef';
import { V1ResourceClaim } from '../models/V1ResourceClaim';
import { V1ResourceFieldSelector } from '../models/V1ResourceFieldSelector';
import { V1ResourceFieldSelectorDivisor } from '../models/V1ResourceFieldSelectorDivisor';
import { V1ResourceName } from '../models/V1ResourceName';
import { V1ResourceRequirements } from '../models/V1ResourceRequirements';
import { V1ResourceResizeRestartPolicy } from '../models/V1ResourceResizeRestartPolicy';
import { V1RestartPolicy } from '../models/V1RestartPolicy';
import { V1SELinuxOptions } from '../models/V1SELinuxOptions';
import { V1ScaleIOVolumeSource } from '../models/V1ScaleIOVolumeSource';
import { V1ScaleIOVolumeSourceSecretRef } from '../models/V1ScaleIOVolumeSourceSecretRef';
import { V1SeccompProfile } from '../models/V1SeccompProfile';
import { V1SeccompProfileType } from '../models/V1SeccompProfileType';
import { V1SecretEnvSource } from '../models/V1SecretEnvSource';
import { V1SecretKeySelector } from '../models/V1SecretKeySelector';
import { V1SecretProjection } from '../models/V1SecretProjection';
import { V1SecretVolumeSource } from '../models/V1SecretVolumeSource';
import { V1SecurityContext } from '../models/V1SecurityContext';
import { V1SecurityContextCapabilities } from '../models/V1SecurityContextCapabilities';
import { V1SecurityContextSeLinuxOptions } from '../models/V1SecurityContextSeLinuxOptions';
import { V1SecurityContextSeccompProfile } from '../models/V1SecurityContextSeccompProfile';
import { V1SecurityContextWindowsOptions } from '../models/V1SecurityContextWindowsOptions';
import { V1ServiceAccountTokenProjection } from '../models/V1ServiceAccountTokenProjection';
import { V1SetupIntent } from '../models/V1SetupIntent';
import { V1StorageMedium } from '../models/V1StorageMedium';
import { V1StorageOSVolumeSource } from '../models/V1StorageOSVolumeSource';
import { V1StorageOSVolumeSourceSecretRef } from '../models/V1StorageOSVolumeSourceSecretRef';
import { V1Sysctl } from '../models/V1Sysctl';
import { V1TCPSocketAction } from '../models/V1TCPSocketAction';
import { V1TCPSocketActionPort } from '../models/V1TCPSocketActionPort';
import { V1TaintEffect } from '../models/V1TaintEffect';
import { V1TaxID } from '../models/V1TaxID';
import { V1TerminationMessagePolicy } from '../models/V1TerminationMessagePolicy';
import { V1Toleration } from '../models/V1Toleration';
import { V1TolerationOperator } from '../models/V1TolerationOperator';
import { V1TopologySpreadConstraint } from '../models/V1TopologySpreadConstraint';
import { V1TopologySpreadConstraintLabelSelector } from '../models/V1TopologySpreadConstraintLabelSelector';
import { V1TypedLocalObjectReference } from '../models/V1TypedLocalObjectReference';
import { V1TypedObjectReference } from '../models/V1TypedObjectReference';
import { V1URIScheme } from '../models/V1URIScheme';
import { V1UncountedTerminatedPods } from '../models/V1UncountedTerminatedPods';
import { V1UnsatisfiableConstraintAction } from '../models/V1UnsatisfiableConstraintAction';
import { V1Volume } from '../models/V1Volume';
import { V1VolumeAwsElasticBlockStore } from '../models/V1VolumeAwsElasticBlockStore';
import { V1VolumeAzureDisk } from '../models/V1VolumeAzureDisk';
import { V1VolumeAzureFile } from '../models/V1VolumeAzureFile';
import { V1VolumeCephfs } from '../models/V1VolumeCephfs';
import { V1VolumeCinder } from '../models/V1VolumeCinder';
import { V1VolumeConfigMap } from '../models/V1VolumeConfigMap';
import { V1VolumeCsi } from '../models/V1VolumeCsi';
import { V1VolumeDevice } from '../models/V1VolumeDevice';
import { V1VolumeDownwardAPI } from '../models/V1VolumeDownwardAPI';
import { V1VolumeEmptyDir } from '../models/V1VolumeEmptyDir';
import { V1VolumeEphemeral } from '../models/V1VolumeEphemeral';
import { V1VolumeFc } from '../models/V1VolumeFc';
import { V1VolumeFlexVolume } from '../models/V1VolumeFlexVolume';
import { V1VolumeFlocker } from '../models/V1VolumeFlocker';
import { V1VolumeGcePersistentDisk } from '../models/V1VolumeGcePersistentDisk';
import { V1VolumeGitRepo } from '../models/V1VolumeGitRepo';
import { V1VolumeGlusterfs } from '../models/V1VolumeGlusterfs';
import { V1VolumeHostPath } from '../models/V1VolumeHostPath';
import { V1VolumeIscsi } from '../models/V1VolumeIscsi';
import { V1VolumeMount } from '../models/V1VolumeMount';
import { V1VolumeNfs } from '../models/V1VolumeNfs';
import { V1VolumePersistentVolumeClaim } from '../models/V1VolumePersistentVolumeClaim';
import { V1VolumePhotonPersistentDisk } from '../models/V1VolumePhotonPersistentDisk';
import { V1VolumePortworxVolume } from '../models/V1VolumePortworxVolume';
import { V1VolumeProjected } from '../models/V1VolumeProjected';
import { V1VolumeProjection } from '../models/V1VolumeProjection';
import { V1VolumeProjectionConfigMap } from '../models/V1VolumeProjectionConfigMap';
import { V1VolumeProjectionDownwardAPI } from '../models/V1VolumeProjectionDownwardAPI';
import { V1VolumeProjectionSecret } from '../models/V1VolumeProjectionSecret';
import { V1VolumeProjectionServiceAccountToken } from '../models/V1VolumeProjectionServiceAccountToken';
import { V1VolumeQuobyte } from '../models/V1VolumeQuobyte';
import { V1VolumeRbd } from '../models/V1VolumeRbd';
import { V1VolumeScaleIO } from '../models/V1VolumeScaleIO';
import { V1VolumeSecret } from '../models/V1VolumeSecret';
import { V1VolumeStorageos } from '../models/V1VolumeStorageos';
import { V1VolumeVsphereVolume } from '../models/V1VolumeVsphereVolume';
import { V1VsphereVirtualDiskVolumeSource } from '../models/V1VsphereVirtualDiskVolumeSource';
import { V1WeightedPodAffinityTerm } from '../models/V1WeightedPodAffinityTerm';
import { V1WeightedPodAffinityTermPodAffinityTerm } from '../models/V1WeightedPodAffinityTermPodAffinityTerm';
import { V1WindowsSecurityContextOptions } from '../models/V1WindowsSecurityContextOptions';
import { V1alpha1Application } from '../models/V1alpha1Application';
import { V1alpha1ApplicationSpec } from '../models/V1alpha1ApplicationSpec';
import { V1alpha1ApplicationSpecDomains } from '../models/V1alpha1ApplicationSpecDomains';
import { V1alpha1ApplicationStatus } from '../models/V1alpha1ApplicationStatus';
import { V1alpha1BlockStorage } from '../models/V1alpha1BlockStorage';
import { V1alpha1Domains } from '../models/V1alpha1Domains';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportBucket } from '../models/V1alpha1ExportBucket';
import { V1alpha1ExportMetadata } from '../models/V1alpha1ExportMetadata';
import { V1alpha1ExportSchedule } from '../models/V1alpha1ExportSchedule';
import { V1alpha1ExportScheduleSpec } from '../models/V1alpha1ExportScheduleSpec';
import { V1alpha1ExportScheduleStatus } from '../models/V1alpha1ExportScheduleStatus';
import { V1alpha1ExportSpec } from '../models/V1alpha1ExportSpec';
import { V1alpha1ExportStatus } from '../models/V1alpha1ExportStatus';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus';
import { V1alpha1Features } from '../models/V1alpha1Features';
import { V1alpha1Job } from '../models/V1alpha1Job';
import { V1alpha1Note } from '../models/V1alpha1Note';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { V1alpha1TemplateInstance } from '../models/V1alpha1TemplateInstance';
import { V1alpha1TemplateStorage } from '../models/V1alpha1TemplateStorage';

import { CloudplaneApiRequestFactory, CloudplaneApiResponseProcessor} from "../apis/CloudplaneApi";
export class ObservableCloudplaneApi {
    private requestFactory: CloudplaneApiRequestFactory;
    private responseProcessor: CloudplaneApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudplaneApiRequestFactory,
        responseProcessor?: CloudplaneApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CloudplaneApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CloudplaneApiResponseProcessor();
    }

    /**
     * Delete identity
     * @param id ID
     */
    public adminDeleteIdentity(id: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.adminDeleteIdentity(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adminDeleteIdentity(rsp)));
            }));
    }

    /**
     * Get identity
     * @param id ID
     */
    public adminGetIdentity(id: string, _options?: Configuration): Observable<ClientIdentity> {
        const requestContextPromise = this.requestFactory.adminGetIdentity(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adminGetIdentity(rsp)));
            }));
    }

    /**
     * List identities
     */
    public adminListIdentity(_options?: Configuration): Observable<Array<ClientIdentity>> {
        const requestContextPromise = this.requestFactory.adminListIdentity(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adminListIdentity(rsp)));
            }));
    }

    /**
     * Get identity applications
     * @param id ID
     */
    public adminListIdentityApplication(id: string, _options?: Configuration): Observable<Array<V1alpha1Application>> {
        const requestContextPromise = this.requestFactory.adminListIdentityApplication(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adminListIdentityApplication(rsp)));
            }));
    }

    /**
     * Update identity
     * @param id ID
     * @param identity Identity
     */
    public adminPutIdentity(id: string, identity: ClientUpdateIdentityBody, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.adminPutIdentity(id, identity, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adminPutIdentity(rsp)));
            }));
    }

    /**
     * Suspend identity
     * @param id ID
     */
    public adminSuspendIdentity(id: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.adminSuspendIdentity(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adminSuspendIdentity(rsp)));
            }));
    }

    /**
     * Delete account
     */
    public deleteAccount(_options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.deleteAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAccount(rsp)));
            }));
    }

    /**
     * Delete application
     * @param name Name
     */
    public deleteApplication(name: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.deleteApplication(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplication(rsp)));
            }));
    }

    /**
     * Delete export schedule
     * @param name Name
     */
    public deleteExportSchedule(name: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.deleteExportSchedule(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExportSchedule(rsp)));
            }));
    }

    /**
     * Delete export target
     * @param name Name
     */
    public deleteExportTarget(name: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.deleteExportTarget(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExportTarget(rsp)));
            }));
    }

    /**
     * Delete payment method
     * @param id ID
     */
    public deletePaymentMethod(id: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.deletePaymentMethod(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePaymentMethod(rsp)));
            }));
    }

    /**
     * Get account
     */
    public getAccount(_options?: Configuration): Observable<V1Account> {
        const requestContextPromise = this.requestFactory.getAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccount(rsp)));
            }));
    }

    /**
     * Get application
     * @param name Name
     */
    public getApplication(name: string, _options?: Configuration): Observable<V1alpha1Application> {
        const requestContextPromise = this.requestFactory.getApplication(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplication(rsp)));
            }));
    }

    /**
     * Get application metrics
     * @param name Name
     */
    public getApplicationMetrics(name: string, _options?: Configuration): Observable<V1ApplicationMetrics> {
        const requestContextPromise = this.requestFactory.getApplicationMetrics(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMetrics(rsp)));
            }));
    }

    /**
     * Get export
     * @param name Name
     */
    public getExport(name: string, _options?: Configuration): Observable<V1alpha1Export> {
        const requestContextPromise = this.requestFactory.getExport(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExport(rsp)));
            }));
    }

    /**
     * Get export schedule
     * @param name Name
     */
    public getExportSchedule(name: string, _options?: Configuration): Observable<V1alpha1ExportSchedule> {
        const requestContextPromise = this.requestFactory.getExportSchedule(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportSchedule(rsp)));
            }));
    }

    /**
     * Get export target
     * @param name Name
     */
    public getExportTarget(name: string, _options?: Configuration): Observable<V1alpha1ExportTarget> {
        const requestContextPromise = this.requestFactory.getExportTarget(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportTarget(rsp)));
            }));
    }

    /**
     * List applications
     */
    public listApplication(_options?: Configuration): Observable<Array<V1alpha1Application>> {
        const requestContextPromise = this.requestFactory.listApplication(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplication(rsp)));
            }));
    }

    /**
     * List exports
     */
    public listExport(_options?: Configuration): Observable<Array<V1alpha1Export>> {
        const requestContextPromise = this.requestFactory.listExport(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listExport(rsp)));
            }));
    }

    /**
     * List export schedules
     */
    public listExportSchedule(_options?: Configuration): Observable<Array<V1alpha1ExportSchedule>> {
        const requestContextPromise = this.requestFactory.listExportSchedule(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listExportSchedule(rsp)));
            }));
    }

    /**
     * List export targets
     */
    public listExportTarget(_options?: Configuration): Observable<Array<V1alpha1ExportTarget>> {
        const requestContextPromise = this.requestFactory.listExportTarget(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listExportTarget(rsp)));
            }));
    }

    /**
     * List templates
     */
    public listTemplate(_options?: Configuration): Observable<Array<V1alpha1Template>> {
        const requestContextPromise = this.requestFactory.listTemplate(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplate(rsp)));
            }));
    }

    /**
     * Create setup intent
     */
    public postSetupIntent(_options?: Configuration): Observable<V1SetupIntent> {
        const requestContextPromise = this.requestFactory.postSetupIntent(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postSetupIntent(rsp)));
            }));
    }

    /**
     * Put account
     * @param account Account
     */
    public putAccount(account: V1Account, _options?: Configuration): Observable<V1Account> {
        const requestContextPromise = this.requestFactory.putAccount(account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putAccount(rsp)));
            }));
    }

    /**
     * Put application.
     * @param application Application
     */
    public putApplication(application: V1alpha1Application, _options?: Configuration): Observable<V1alpha1Application> {
        const requestContextPromise = this.requestFactory.putApplication(application, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putApplication(rsp)));
            }));
    }

    /**
     * Put export
     * @param _export Export
     */
    public putExport(_export: V1alpha1Export, _options?: Configuration): Observable<V1alpha1Export> {
        const requestContextPromise = this.requestFactory.putExport(_export, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putExport(rsp)));
            }));
    }

    /**
     * Put export schedule
     * @param schedule ExportSchedule
     */
    public putExportSchedule(schedule: V1alpha1ExportSchedule, _options?: Configuration): Observable<V1alpha1ExportSchedule> {
        const requestContextPromise = this.requestFactory.putExportSchedule(schedule, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putExportSchedule(rsp)));
            }));
    }

    /**
     * Put export target
     * @param exportTarget ExportTarget
     */
    public putExportTarget(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Observable<V1alpha1ExportTarget> {
        const requestContextPromise = this.requestFactory.putExportTarget(exportTarget, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putExportTarget(rsp)));
            }));
    }

    /**
     * Put job
     * @param jobInput JobInput
     */
    public putJob(jobInput: V1JobInput, _options?: Configuration): Observable<V1JobResponse> {
        const requestContextPromise = this.requestFactory.putJob(jobInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putJob(rsp)));
            }));
    }

}
