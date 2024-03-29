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

import { HttpFile } from '../http/http';

export class V1ExecAction {
    /**
    * Command is the command line to execute inside the container, the working directory for the command  is root (\'/\') in the container\'s filesystem. The command is simply exec\'d, it is not run inside a shell, so traditional shell instructions (\'|\', etc) won\'t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional
    */
    'command'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ExecAction.attributeTypeMap;
    }

    public constructor() {
    }
}

