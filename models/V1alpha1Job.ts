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

import { V1Job } from '../models/V1Job';
import { HttpFile } from '../http/http';

export class V1alpha1Job {
    'description'?: string;
    'name'?: string;
    'parameters'?: any;
    'template'?: V1Job;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
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
            "name": "parameters",
            "baseName": "parameters",
            "type": "any",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1Job",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1Job.attributeTypeMap;
    }

    public constructor() {
    }
}

