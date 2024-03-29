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

import { IntstrType } from '../models/IntstrType';
import { HttpFile } from '../http/http';

/**
* Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
*/
export class V1TCPSocketActionPort {
    'intVal'?: number;
    'strVal'?: string;
    'type'?: IntstrType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "intVal",
            "baseName": "intVal",
            "type": "number",
            "format": ""
        },
        {
            "name": "strVal",
            "baseName": "strVal",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IntstrType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1TCPSocketActionPort.attributeTypeMap;
    }

    public constructor() {
    }
}



