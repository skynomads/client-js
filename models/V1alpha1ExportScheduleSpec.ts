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

import { V1alpha1Export } from '../models/V1alpha1Export';
import { HttpFile } from '../http/http';

export class V1alpha1ExportScheduleSpec {
    'schedule'?: string;
    'template'?: V1alpha1Export;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1alpha1Export",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ExportScheduleSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
