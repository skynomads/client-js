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

import { V1LabelSelectorRequirement } from '../models/V1LabelSelectorRequirement';
import { HttpFile } from '../http/http';

/**
* A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means \"this pod\'s namespace\". An empty selector ({}) matches all namespaces. +optional
*/
export class V1PodAffinityTermNamespaceSelector {
    /**
    * matchExpressions is a list of label selector requirements. The requirements are ANDed. +optional
    */
    'matchExpressions'?: Array<V1LabelSelectorRequirement>;
    /**
    * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed. +optional
    */
    'matchLabels'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1LabelSelectorRequirement>",
            "format": ""
        },
        {
            "name": "matchLabels",
            "baseName": "matchLabels",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodAffinityTermNamespaceSelector.attributeTypeMap;
    }

    public constructor() {
    }
}
