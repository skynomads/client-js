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

import { V1ResourceFieldSelectorDivisor } from '../models/V1ResourceFieldSelectorDivisor';
import { HttpFile } from '../http/http';

/**
* Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. +optional
*/
export class V1EnvVarSourceResourceFieldRef {
    /**
    * Container name: required for volumes, optional for env vars +optional
    */
    'containerName'?: string;
    'divisor'?: V1ResourceFieldSelectorDivisor;
    /**
    * Required: resource to select
    */
    'resource'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerName",
            "baseName": "containerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "divisor",
            "baseName": "divisor",
            "type": "V1ResourceFieldSelectorDivisor",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EnvVarSourceResourceFieldRef.attributeTypeMap;
    }

    public constructor() {
    }
}

