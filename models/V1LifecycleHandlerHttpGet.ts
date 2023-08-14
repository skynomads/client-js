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

import { V1HTTPGetActionPort } from '../models/V1HTTPGetActionPort';
import { V1HTTPHeader } from '../models/V1HTTPHeader';
import { V1URIScheme } from '../models/V1URIScheme';
import { HttpFile } from '../http/http';

/**
* HTTPGet specifies the http request to perform. +optional
*/
export class V1LifecycleHandlerHttpGet {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead. +optional
    */
    'host'?: string;
    /**
    * Custom headers to set in the request. HTTP allows repeated headers. +optional
    */
    'httpHeaders'?: Array<V1HTTPHeader>;
    /**
    * Path to access on the HTTP server. +optional
    */
    'path'?: string;
    'port'?: V1HTTPGetActionPort;
    'scheme'?: V1URIScheme;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<V1HTTPHeader>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "V1HTTPGetActionPort",
            "format": ""
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "V1URIScheme",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifecycleHandlerHttpGet.attributeTypeMap;
    }

    public constructor() {
    }
}



