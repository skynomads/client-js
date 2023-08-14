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

import { V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution } from '../models/V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution';
import { V1PreferredSchedulingTerm } from '../models/V1PreferredSchedulingTerm';
import { HttpFile } from '../http/http';

/**
* Describes node affinity scheduling rules for the pod. +optional
*/
export class V1AffinityNodeAffinity {
    /**
    * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. +optional
    */
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<V1PreferredSchedulingTerm>;
    'requiredDuringSchedulingIgnoredDuringExecution'?: V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<V1PreferredSchedulingTerm>",
            "format": ""
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "V1NodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1AffinityNodeAffinity.attributeTypeMap;
    }

    public constructor() {
    }
}

