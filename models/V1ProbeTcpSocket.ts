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

import { V1TCPSocketActionPort } from '../models/V1TCPSocketActionPort';
import { HttpFile } from '../http/http';

/**
* TCPSocket specifies an action involving a TCP port. +optional
*/
export class V1ProbeTcpSocket {
    /**
    * Optional: Host name to connect to, defaults to the pod IP. +optional
    */
    'host'?: string;
    'port'?: V1TCPSocketActionPort;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "V1TCPSocketActionPort",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ProbeTcpSocket.attributeTypeMap;
    }

    public constructor() {
    }
}
