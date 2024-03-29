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

import { HttpFile } from '../http/http';

/**
* uncountedTerminatedPods holds the UIDs of Pods that have terminated but the job controller hasn\'t yet accounted for in the status counters.  The job controller creates pods with a finalizer. When a pod terminates (succeeded or failed), the controller does three steps to account for it in the job status:  1. Add the pod UID to the arrays in this field. 2. Remove the pod finalizer. 3. Remove the pod UID from the arrays while increasing the corresponding     counter.  Old jobs might not be tracked using this field, in which case the field remains null. +optional
*/
export class V1JobStatusUncountedTerminatedPods {
    /**
    * failed holds UIDs of failed Pods. +listType=set +optional
    */
    'failed'?: Array<string>;
    /**
    * succeeded holds UIDs of succeeded Pods. +listType=set +optional
    */
    'succeeded'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "failed",
            "baseName": "failed",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1JobStatusUncountedTerminatedPods.attributeTypeMap;
    }

    public constructor() {
    }
}

