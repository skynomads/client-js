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

import { ClientIdentityWithCredentialsOidc } from '../models/ClientIdentityWithCredentialsOidc';
import { ClientIdentityWithCredentialsPassword } from '../models/ClientIdentityWithCredentialsPassword';
import { HttpFile } from '../http/http';

export class ClientIdentityWithCredentials {
    'oidc'?: ClientIdentityWithCredentialsOidc;
    'password'?: ClientIdentityWithCredentialsPassword;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "oidc",
            "baseName": "oidc",
            "type": "ClientIdentityWithCredentialsOidc",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "ClientIdentityWithCredentialsPassword",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientIdentityWithCredentials.attributeTypeMap;
    }

    public constructor() {
    }
}
