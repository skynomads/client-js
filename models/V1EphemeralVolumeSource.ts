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

import { V1EphemeralVolumeSourceVolumeClaimTemplate } from '../models/V1EphemeralVolumeSourceVolumeClaimTemplate';
import { HttpFile } from '../http/http';

export class V1EphemeralVolumeSource {
    'volumeClaimTemplate'?: V1EphemeralVolumeSourceVolumeClaimTemplate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "volumeClaimTemplate",
            "baseName": "volumeClaimTemplate",
            "type": "V1EphemeralVolumeSourceVolumeClaimTemplate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EphemeralVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

