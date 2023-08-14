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

export class V1UncountedTerminatedPods {
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
        return V1UncountedTerminatedPods.attributeTypeMap;
    }

    public constructor() {
    }
}

