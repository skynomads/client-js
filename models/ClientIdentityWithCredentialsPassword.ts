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

import { ClientIdentityWithCredentialsPasswordConfig } from '../models/ClientIdentityWithCredentialsPasswordConfig';
import { HttpFile } from '../http/http';

export class ClientIdentityWithCredentialsPassword {
    'config'?: ClientIdentityWithCredentialsPasswordConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "ClientIdentityWithCredentialsPasswordConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientIdentityWithCredentialsPassword.attributeTypeMap;
    }

    public constructor() {
    }
}

