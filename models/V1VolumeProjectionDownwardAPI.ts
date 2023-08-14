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

import { V1DownwardAPIVolumeFile } from '../models/V1DownwardAPIVolumeFile';
import { HttpFile } from '../http/http';

/**
* downwardAPI information about the downwardAPI data to project +optional
*/
export class V1VolumeProjectionDownwardAPI {
    /**
    * Items is a list of DownwardAPIVolume file +optional
    */
    'items'?: Array<V1DownwardAPIVolumeFile>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeProjectionDownwardAPI.attributeTypeMap;
    }

    public constructor() {
    }
}
