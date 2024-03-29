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

export class V1TypedObjectReference {
    /**
    * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. +optional
    */
    'apiGroup'?: string;
    /**
    * Kind is the type of resource being referenced
    */
    'kind'?: string;
    /**
    * Name is the name of resource being referenced
    */
    'name'?: string;
    /**
    * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace\'s owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled. +featureGate=CrossNamespaceVolumeDataSource +optional
    */
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiGroup",
            "baseName": "apiGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1TypedObjectReference.attributeTypeMap;
    }

    public constructor() {
    }
}

