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

export class V1SELinuxOptions {
    /**
    * Level is SELinux level label that applies to the container. +optional
    */
    'level'?: string;
    /**
    * Role is a SELinux role label that applies to the container. +optional
    */
    'role'?: string;
    /**
    * Type is a SELinux type label that applies to the container. +optional
    */
    'type'?: string;
    /**
    * User is a SELinux user label that applies to the container. +optional
    */
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "level",
            "baseName": "level",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1SELinuxOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

