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

import { V1VolumeAwsElasticBlockStore } from '../models/V1VolumeAwsElasticBlockStore';
import { V1VolumeAzureDisk } from '../models/V1VolumeAzureDisk';
import { V1VolumeAzureFile } from '../models/V1VolumeAzureFile';
import { V1VolumeCephfs } from '../models/V1VolumeCephfs';
import { V1VolumeCinder } from '../models/V1VolumeCinder';
import { V1VolumeConfigMap } from '../models/V1VolumeConfigMap';
import { V1VolumeCsi } from '../models/V1VolumeCsi';
import { V1VolumeDownwardAPI } from '../models/V1VolumeDownwardAPI';
import { V1VolumeEmptyDir } from '../models/V1VolumeEmptyDir';
import { V1VolumeEphemeral } from '../models/V1VolumeEphemeral';
import { V1VolumeFc } from '../models/V1VolumeFc';
import { V1VolumeFlexVolume } from '../models/V1VolumeFlexVolume';
import { V1VolumeFlocker } from '../models/V1VolumeFlocker';
import { V1VolumeGcePersistentDisk } from '../models/V1VolumeGcePersistentDisk';
import { V1VolumeGitRepo } from '../models/V1VolumeGitRepo';
import { V1VolumeGlusterfs } from '../models/V1VolumeGlusterfs';
import { V1VolumeHostPath } from '../models/V1VolumeHostPath';
import { V1VolumeIscsi } from '../models/V1VolumeIscsi';
import { V1VolumeNfs } from '../models/V1VolumeNfs';
import { V1VolumePersistentVolumeClaim } from '../models/V1VolumePersistentVolumeClaim';
import { V1VolumePhotonPersistentDisk } from '../models/V1VolumePhotonPersistentDisk';
import { V1VolumePortworxVolume } from '../models/V1VolumePortworxVolume';
import { V1VolumeProjected } from '../models/V1VolumeProjected';
import { V1VolumeQuobyte } from '../models/V1VolumeQuobyte';
import { V1VolumeRbd } from '../models/V1VolumeRbd';
import { V1VolumeScaleIO } from '../models/V1VolumeScaleIO';
import { V1VolumeSecret } from '../models/V1VolumeSecret';
import { V1VolumeStorageos } from '../models/V1VolumeStorageos';
import { V1VolumeVsphereVolume } from '../models/V1VolumeVsphereVolume';
import { HttpFile } from '../http/http';

export class V1Volume {
    'awsElasticBlockStore'?: V1VolumeAwsElasticBlockStore;
    'azureDisk'?: V1VolumeAzureDisk;
    'azureFile'?: V1VolumeAzureFile;
    'cephfs'?: V1VolumeCephfs;
    'cinder'?: V1VolumeCinder;
    'configMap'?: V1VolumeConfigMap;
    'csi'?: V1VolumeCsi;
    'downwardAPI'?: V1VolumeDownwardAPI;
    'emptyDir'?: V1VolumeEmptyDir;
    'ephemeral'?: V1VolumeEphemeral;
    'fc'?: V1VolumeFc;
    'flexVolume'?: V1VolumeFlexVolume;
    'flocker'?: V1VolumeFlocker;
    'gcePersistentDisk'?: V1VolumeGcePersistentDisk;
    'gitRepo'?: V1VolumeGitRepo;
    'glusterfs'?: V1VolumeGlusterfs;
    'hostPath'?: V1VolumeHostPath;
    'iscsi'?: V1VolumeIscsi;
    /**
    * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name'?: string;
    'nfs'?: V1VolumeNfs;
    'persistentVolumeClaim'?: V1VolumePersistentVolumeClaim;
    'photonPersistentDisk'?: V1VolumePhotonPersistentDisk;
    'portworxVolume'?: V1VolumePortworxVolume;
    'projected'?: V1VolumeProjected;
    'quobyte'?: V1VolumeQuobyte;
    'rbd'?: V1VolumeRbd;
    'scaleIO'?: V1VolumeScaleIO;
    'secret'?: V1VolumeSecret;
    'storageos'?: V1VolumeStorageos;
    'vsphereVolume'?: V1VolumeVsphereVolume;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "awsElasticBlockStore",
            "baseName": "awsElasticBlockStore",
            "type": "V1VolumeAwsElasticBlockStore",
            "format": ""
        },
        {
            "name": "azureDisk",
            "baseName": "azureDisk",
            "type": "V1VolumeAzureDisk",
            "format": ""
        },
        {
            "name": "azureFile",
            "baseName": "azureFile",
            "type": "V1VolumeAzureFile",
            "format": ""
        },
        {
            "name": "cephfs",
            "baseName": "cephfs",
            "type": "V1VolumeCephfs",
            "format": ""
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "V1VolumeCinder",
            "format": ""
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "V1VolumeConfigMap",
            "format": ""
        },
        {
            "name": "csi",
            "baseName": "csi",
            "type": "V1VolumeCsi",
            "format": ""
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "V1VolumeDownwardAPI",
            "format": ""
        },
        {
            "name": "emptyDir",
            "baseName": "emptyDir",
            "type": "V1VolumeEmptyDir",
            "format": ""
        },
        {
            "name": "ephemeral",
            "baseName": "ephemeral",
            "type": "V1VolumeEphemeral",
            "format": ""
        },
        {
            "name": "fc",
            "baseName": "fc",
            "type": "V1VolumeFc",
            "format": ""
        },
        {
            "name": "flexVolume",
            "baseName": "flexVolume",
            "type": "V1VolumeFlexVolume",
            "format": ""
        },
        {
            "name": "flocker",
            "baseName": "flocker",
            "type": "V1VolumeFlocker",
            "format": ""
        },
        {
            "name": "gcePersistentDisk",
            "baseName": "gcePersistentDisk",
            "type": "V1VolumeGcePersistentDisk",
            "format": ""
        },
        {
            "name": "gitRepo",
            "baseName": "gitRepo",
            "type": "V1VolumeGitRepo",
            "format": ""
        },
        {
            "name": "glusterfs",
            "baseName": "glusterfs",
            "type": "V1VolumeGlusterfs",
            "format": ""
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "V1VolumeHostPath",
            "format": ""
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "V1VolumeIscsi",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nfs",
            "baseName": "nfs",
            "type": "V1VolumeNfs",
            "format": ""
        },
        {
            "name": "persistentVolumeClaim",
            "baseName": "persistentVolumeClaim",
            "type": "V1VolumePersistentVolumeClaim",
            "format": ""
        },
        {
            "name": "photonPersistentDisk",
            "baseName": "photonPersistentDisk",
            "type": "V1VolumePhotonPersistentDisk",
            "format": ""
        },
        {
            "name": "portworxVolume",
            "baseName": "portworxVolume",
            "type": "V1VolumePortworxVolume",
            "format": ""
        },
        {
            "name": "projected",
            "baseName": "projected",
            "type": "V1VolumeProjected",
            "format": ""
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "V1VolumeQuobyte",
            "format": ""
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "V1VolumeRbd",
            "format": ""
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "V1VolumeScaleIO",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "V1VolumeSecret",
            "format": ""
        },
        {
            "name": "storageos",
            "baseName": "storageos",
            "type": "V1VolumeStorageos",
            "format": ""
        },
        {
            "name": "vsphereVolume",
            "baseName": "vsphereVolume",
            "type": "V1VolumeVsphereVolume",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Volume.attributeTypeMap;
    }

    public constructor() {
    }
}

