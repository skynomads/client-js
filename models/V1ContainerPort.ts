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

import { V1Protocol } from '../models/V1Protocol';
import { HttpFile } from '../http/http';

export class V1ContainerPort {
    /**
    * Number of port to expose on the pod\'s IP address. This must be a valid port number, 0 < x < 65536.
    */
    'containerPort'?: number;
    /**
    * What host IP to bind the external port to. +optional
    */
    'hostIP'?: string;
    /**
    * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. +optional
    */
    'hostPort'?: number;
    /**
    * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. +optional
    */
    'name'?: string;
    'protocol'?: V1Protocol;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerPort",
            "baseName": "containerPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "hostIP",
            "baseName": "hostIP",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostPort",
            "baseName": "hostPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "V1Protocol",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerPort.attributeTypeMap;
    }

    public constructor() {
    }
}



