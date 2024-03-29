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

import { V1NodeSelectorRequirement } from '../models/V1NodeSelectorRequirement';
import { HttpFile } from '../http/http';

/**
* A node selector term, associated with the corresponding weight.
*/
export class V1PreferredSchedulingTermPreference {
    /**
    * A list of node selector requirements by node\'s labels. +optional
    */
    'matchExpressions'?: Array<V1NodeSelectorRequirement>;
    /**
    * A list of node selector requirements by node\'s fields. +optional
    */
    'matchFields'?: Array<V1NodeSelectorRequirement>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<V1NodeSelectorRequirement>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PreferredSchedulingTermPreference.attributeTypeMap;
    }

    public constructor() {
    }
}

