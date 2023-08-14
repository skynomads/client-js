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

import { ClientIdentityWithCredentialsOidcConfigProvider } from '../models/ClientIdentityWithCredentialsOidcConfigProvider';
import { ClientIdentityWithCredentialsPasswordConfig } from '../models/ClientIdentityWithCredentialsPasswordConfig';
import { HttpFile } from '../http/http';

export class ClientIdentityWithCredentialsOidcConfig {
    'config'?: ClientIdentityWithCredentialsPasswordConfig;
    /**
    * A list of OpenID Connect Providers
    */
    'providers'?: Array<ClientIdentityWithCredentialsOidcConfigProvider>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "ClientIdentityWithCredentialsPasswordConfig",
            "format": ""
        },
        {
            "name": "providers",
            "baseName": "providers",
            "type": "Array<ClientIdentityWithCredentialsOidcConfigProvider>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientIdentityWithCredentialsOidcConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

