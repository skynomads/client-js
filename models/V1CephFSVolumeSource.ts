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

import { V1CephFSVolumeSourceSecretRef } from '../models/V1CephFSVolumeSourceSecretRef';
import { HttpFile } from '../http/http';

export class V1CephFSVolumeSource {
    /**
    * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
    */
    'monitors'?: Array<string>;
    /**
    * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is / +optional
    */
    'path'?: string;
    /**
    * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it +optional
    */
    'readOnly'?: boolean;
    /**
    * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it +optional
    */
    'secretFile'?: string;
    'secretRef'?: V1CephFSVolumeSourceSecretRef;
    /**
    * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it +optional
    */
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "monitors",
            "baseName": "monitors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
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
            "name": "secretFile",
            "baseName": "secretFile",
            "type": "string",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1CephFSVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CephFSVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

