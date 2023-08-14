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

import { V1OSName } from '../models/V1OSName';
import { HttpFile } from '../http/http';

export class V1PodOS {
    'name'?: V1OSName;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "V1OSName",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodOS.attributeTypeMap;
    }

    public constructor() {
    }
}


