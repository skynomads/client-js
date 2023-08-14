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
* Selects a key of a ConfigMap. +optional
*/
export class V1EnvVarSourceConfigMapKeyRef {
    /**
    * The key to select.
    */
    'key'?: string;
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid? +optional
    */
    'name'?: string;
    /**
    * Specify whether the ConfigMap or its key must be defined +optional
    */
    'optional'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EnvVarSourceConfigMapKeyRef.attributeTypeMap;
    }

    public constructor() {
    }
}
