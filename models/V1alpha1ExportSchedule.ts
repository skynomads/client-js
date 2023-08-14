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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1alpha1ExportScheduleSpec } from '../models/V1alpha1ExportScheduleSpec';
import { V1alpha1ExportScheduleStatus } from '../models/V1alpha1ExportScheduleStatus';
import { HttpFile } from '../http/http';

export class V1alpha1ExportSchedule {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1alpha1ExportScheduleSpec;
    'status'?: V1alpha1ExportScheduleStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1ExportScheduleSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1ExportScheduleStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ExportSchedule.attributeTypeMap;
    }

    public constructor() {
    }
}
