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

import { V1ISCSIVolumeSourceSecretRef } from '../models/V1ISCSIVolumeSourceSecretRef';
import { HttpFile } from '../http/http';

export class V1ISCSIVolumeSource {
    /**
    * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication +optional
    */
    'chapAuthDiscovery'?: boolean;
    /**
    * chapAuthSession defines whether support iSCSI Session CHAP authentication +optional
    */
    'chapAuthSession'?: boolean;
    /**
    * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine +optional
    */
    'fsType'?: string;
    /**
    * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. +optional
    */
    'initiatorName'?: string;
    /**
    * iqn is the target iSCSI Qualified Name.
    */
    'iqn'?: string;
    /**
    * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to \'default\' (tcp). +optional
    */
    'iscsiInterface'?: string;
    /**
    * lun represents iSCSI Target Lun number.
    */
    'lun'?: number;
    /**
    * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). +optional
    */
    'portals'?: Array<string>;
    /**
    * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. +optional
    */
    'readOnly'?: boolean;
    'secretRef'?: V1ISCSIVolumeSourceSecretRef;
    /**
    * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
    */
    'targetPortal'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chapAuthDiscovery",
            "baseName": "chapAuthDiscovery",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chapAuthSession",
            "baseName": "chapAuthSession",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "initiatorName",
            "baseName": "initiatorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "iqn",
            "baseName": "iqn",
            "type": "string",
            "format": ""
        },
        {
            "name": "iscsiInterface",
            "baseName": "iscsiInterface",
            "type": "string",
            "format": ""
        },
        {
            "name": "lun",
            "baseName": "lun",
            "type": "number",
            "format": ""
        },
        {
            "name": "portals",
            "baseName": "portals",
            "type": "Array<string>",
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
            "type": "V1ISCSIVolumeSourceSecretRef",
            "format": ""
        },
        {
            "name": "targetPortal",
            "baseName": "targetPortal",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ISCSIVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

