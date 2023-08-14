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

import { V1EnvVarSourceConfigMapKeyRef } from '../models/V1EnvVarSourceConfigMapKeyRef';
import { V1EnvVarSourceFieldRef } from '../models/V1EnvVarSourceFieldRef';
import { V1EnvVarSourceResourceFieldRef } from '../models/V1EnvVarSourceResourceFieldRef';
import { V1EnvVarSourceSecretKeyRef } from '../models/V1EnvVarSourceSecretKeyRef';
import { HttpFile } from '../http/http';

/**
* Source for the environment variable\'s value. Cannot be used if value is not empty. +optional
*/
export class V1EnvVarValueFrom {
    'configMapKeyRef'?: V1EnvVarSourceConfigMapKeyRef;
    'fieldRef'?: V1EnvVarSourceFieldRef;
    'resourceFieldRef'?: V1EnvVarSourceResourceFieldRef;
    'secretKeyRef'?: V1EnvVarSourceSecretKeyRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMapKeyRef",
            "baseName": "configMapKeyRef",
            "type": "V1EnvVarSourceConfigMapKeyRef",
            "format": ""
        },
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "V1EnvVarSourceFieldRef",
            "format": ""
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "V1EnvVarSourceResourceFieldRef",
            "format": ""
        },
        {
            "name": "secretKeyRef",
            "baseName": "secretKeyRef",
            "type": "V1EnvVarSourceSecretKeyRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EnvVarValueFrom.attributeTypeMap;
    }

    public constructor() {
    }
}

