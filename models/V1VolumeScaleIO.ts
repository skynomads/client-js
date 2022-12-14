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

import { V1ScaleIOVolumeSourceSecretRef } from '../models/V1ScaleIOVolumeSourceSecretRef';
import { HttpFile } from '../http/http';

/**
* scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. +optional
*/
export class V1VolumeScaleIO {
    /**
    * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\". +optional
    */
    'fsType'?: string;
    /**
    * gateway is the host address of the ScaleIO API Gateway.
    */
    'gateway'?: string;
    /**
    * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. +optional
    */
    'protectionDomain'?: string;
    /**
    * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. +optional
    */
    'readOnly'?: boolean;
    'secretRef'?: V1ScaleIOVolumeSourceSecretRef;
    /**
    * sslEnabled Flag enable/disable SSL communication with Gateway, default false +optional
    */
    'sslEnabled'?: boolean;
    /**
    * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. +optional
    */
    'storageMode'?: string;
    /**
    * storagePool is the ScaleIO Storage Pool associated with the protection domain. +optional
    */
    'storagePool'?: string;
    /**
    * system is the name of the storage system as configured in ScaleIO.
    */
    'system'?: string;
    /**
    * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
    */
    'volumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "string",
            "format": ""
        },
        {
            "name": "protectionDomain",
            "baseName": "protectionDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1ScaleIOVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "sslEnabled",
            "baseName": "sslEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storageMode",
            "baseName": "storageMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePool",
            "baseName": "storagePool",
            "type": "string",
            "format": ""
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1VolumeScaleIO.attributeTypeMap;
    }

    public constructor() {
    }
}

