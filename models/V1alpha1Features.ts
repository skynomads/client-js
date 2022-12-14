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

import { V1alpha1TemplateInstance } from '../models/V1alpha1TemplateInstance';
import { V1alpha1TemplateStorage } from '../models/V1alpha1TemplateStorage';
import { HttpFile } from '../http/http';

export class V1alpha1Features {
    'instance'?: V1alpha1TemplateInstance;
    'storage'?: V1alpha1TemplateStorage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "instance",
            "baseName": "instance",
            "type": "V1alpha1TemplateInstance",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "V1alpha1TemplateStorage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1Features.attributeTypeMap;
    }

    public constructor() {
    }
}

