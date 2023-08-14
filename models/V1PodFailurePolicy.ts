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

import { V1PodFailurePolicyRule } from '../models/V1PodFailurePolicyRule';
import { HttpFile } from '../http/http';

export class V1PodFailurePolicy {
    /**
    * A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed. +listType=atomic
    */
    'rules'?: Array<V1PodFailurePolicyRule>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1PodFailurePolicyRule>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodFailurePolicy.attributeTypeMap;
    }

    public constructor() {
    }
}
