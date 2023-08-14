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

import { V1CompletionMode } from '../models/V1CompletionMode';
import { V1JobSpecPodFailurePolicy } from '../models/V1JobSpecPodFailurePolicy';
import { V1JobSpecSelector } from '../models/V1JobSpecSelector';
import { V1JobSpecTemplate } from '../models/V1JobSpecTemplate';
import { HttpFile } from '../http/http';

/**
* Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status +optional
*/
export class V1JobSpec {
    /**
    * Specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it; value must be positive integer. If a Job is suspended (at creation or through an update), this timer will effectively be stopped and reset when the Job is resumed again. +optional
    */
    'activeDeadlineSeconds'?: number;
    /**
    * Specifies the number of retries before marking this job failed. Defaults to 6 +optional
    */
    'backoffLimit'?: number;
    'completionMode'?: V1CompletionMode;
    /**
    * Specifies the desired number of successfully finished pods the job should be run with.  Setting to null means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
    */
    'completions'?: number;
    /**
    * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector +optional
    */
    'manualSelector'?: boolean;
    /**
    * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
    */
    'parallelism'?: number;
    'podFailurePolicy'?: V1JobSpecPodFailurePolicy;
    'selector'?: V1JobSpecSelector;
    /**
    * suspend specifies whether the Job controller should create Pods or not. If a Job is created with suspend set to true, no Pods are created by the Job controller. If a Job is suspended after creation (i.e. the flag goes from false to true), the Job controller will delete all active Pods associated with this Job. Users must design their workload to gracefully handle this. Suspending a Job will reset the StartTime field of the Job, effectively resetting the ActiveDeadlineSeconds timer too. Defaults to false.  +optional
    */
    'suspend'?: boolean;
    'template'?: V1JobSpecTemplate;
    /**
    * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won\'t be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. +optional
    */
    'ttlSecondsAfterFinished'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "backoffLimit",
            "baseName": "backoffLimit",
            "type": "number",
            "format": ""
        },
        {
            "name": "completionMode",
            "baseName": "completionMode",
            "type": "V1CompletionMode",
            "format": ""
        },
        {
            "name": "completions",
            "baseName": "completions",
            "type": "number",
            "format": ""
        },
        {
            "name": "manualSelector",
            "baseName": "manualSelector",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parallelism",
            "baseName": "parallelism",
            "type": "number",
            "format": ""
        },
        {
            "name": "podFailurePolicy",
            "baseName": "podFailurePolicy",
            "type": "V1JobSpecPodFailurePolicy",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1JobSpecSelector",
            "format": ""
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1JobSpecTemplate",
            "format": ""
        },
        {
            "name": "ttlSecondsAfterFinished",
            "baseName": "ttlSecondsAfterFinished",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1JobSpec.attributeTypeMap;
    }

    public constructor() {
    }
}



