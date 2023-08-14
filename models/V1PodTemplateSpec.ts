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

import { V1JobMetadata } from '../models/V1JobMetadata';
import { V1PodTemplateSpecSpec } from '../models/V1PodTemplateSpecSpec';
import { HttpFile } from '../http/http';

export class V1PodTemplateSpec {
    'metadata'?: V1JobMetadata;
    'spec'?: V1PodTemplateSpecSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1JobMetadata",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1PodTemplateSpecSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodTemplateSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
