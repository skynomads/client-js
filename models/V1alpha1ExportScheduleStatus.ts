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

import { V1Condition } from '../models/V1Condition';
import { HttpFile } from '../http/http';

export class V1alpha1ExportScheduleStatus {
    'conditions'?: Array<V1Condition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1Condition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ExportScheduleStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

