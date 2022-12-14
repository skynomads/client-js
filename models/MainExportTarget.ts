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

import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus';
import { HttpFile } from '../http/http';

export class MainExportTarget {
    'name'?: string;
    'spec'?: V1alpha1ExportTargetSpec;
    'status'?: V1alpha1ExportTargetStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1ExportTargetSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1ExportTargetStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MainExportTarget.attributeTypeMap;
    }

    public constructor() {
    }
}

