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

import { ResourceQuantity } from '../models/ResourceQuantity';
import { V1ResourceClaim } from '../models/V1ResourceClaim';
import { HttpFile } from '../http/http';

/**
* Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ +optional
*/
export class V1ContainerResources {
    /**
    * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers.  +listType=map +listMapKey=name +featureGate=DynamicResourceAllocation +optional
    */
    'claims'?: Array<V1ResourceClaim>;
    'limits'?: { [key: string]: ResourceQuantity; };
    'requests'?: { [key: string]: ResourceQuantity; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "claims",
            "baseName": "claims",
            "type": "Array<V1ResourceClaim>",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: ResourceQuantity; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerResources.attributeTypeMap;
    }

    public constructor() {
    }
}

