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

import { V1NodeSelectorTerm } from '../models/V1NodeSelectorTerm';
import { HttpFile } from '../http/http';

export class V1NodeSelector {
    /**
    * Required. A list of node selector terms. The terms are ORed.
    */
    'nodeSelectorTerms'?: Array<V1NodeSelectorTerm>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeSelectorTerms",
            "baseName": "nodeSelectorTerms",
            "type": "Array<V1NodeSelectorTerm>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSelector.attributeTypeMap;
    }

    public constructor() {
    }
}

