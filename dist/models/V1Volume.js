"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Volume = void 0;
var V1Volume = (function () {
    function V1Volume() {
    }
    V1Volume.getAttributeTypeMap = function () {
        return V1Volume.attributeTypeMap;
    };
    V1Volume.discriminator = undefined;
    V1Volume.attributeTypeMap = [
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
        }
    ];
    return V1Volume;
}());
exports.V1Volume = V1Volume;
//# sourceMappingURL=V1Volume.js.map