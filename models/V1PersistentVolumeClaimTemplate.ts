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

import { V1PersistentVolumeClaimTemplateMetadata } from '../models/V1PersistentVolumeClaimTemplateMetadata';
import { V1PersistentVolumeClaimTemplateSpec } from '../models/V1PersistentVolumeClaimTemplateSpec';
import { HttpFile } from '../http/http';

export class V1PersistentVolumeClaimTemplate {
    'metadata'?: V1PersistentVolumeClaimTemplateMetadata;
    'spec'?: V1PersistentVolumeClaimTemplateSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1PersistentVolumeClaimTemplateMetadata",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PersistentVolumeClaimTemplateSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}
