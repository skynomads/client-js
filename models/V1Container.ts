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

import { V1ContainerLifecycle } from '../models/V1ContainerLifecycle';
import { V1ContainerLivenessProbe } from '../models/V1ContainerLivenessProbe';
import { V1ContainerPort } from '../models/V1ContainerPort';
import { V1ContainerReadinessProbe } from '../models/V1ContainerReadinessProbe';
import { V1ContainerResizePolicy } from '../models/V1ContainerResizePolicy';
import { V1ContainerResources } from '../models/V1ContainerResources';
import { V1ContainerSecurityContext } from '../models/V1ContainerSecurityContext';
import { V1ContainerStartupProbe } from '../models/V1ContainerStartupProbe';
import { V1EnvFromSource } from '../models/V1EnvFromSource';
import { V1EnvVar } from '../models/V1EnvVar';
import { V1PullPolicy } from '../models/V1PullPolicy';
import { V1TerminationMessagePolicy } from '../models/V1TerminationMessagePolicy';
import { V1VolumeDevice } from '../models/V1VolumeDevice';
import { V1VolumeMount } from '../models/V1VolumeMount';
import { HttpFile } from '../http/http';

export class V1Container {
    /**
    * Arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
    */
    'args'?: Array<string>;
    /**
    * Entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
    */
    'command'?: Array<string>;
    /**
    * List of environment variables to set in the container. Cannot be updated. +optional +patchMergeKey=name +patchStrategy=merge
    */
    'env'?: Array<V1EnvVar>;
    /**
    * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. +optional
    */
    'envFrom'?: Array<V1EnvFromSource>;
    /**
    * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. +optional
    */
    'image'?: string;
    'imagePullPolicy'?: V1PullPolicy;
    'lifecycle'?: V1ContainerLifecycle;
    'livenessProbe'?: V1ContainerLivenessProbe;
    /**
    * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
    */
    'name'?: string;
    /**
    * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated. +optional +patchMergeKey=containerPort +patchStrategy=merge +listType=map +listMapKey=containerPort +listMapKey=protocol
    */
    'ports'?: Array<V1ContainerPort>;
    'readinessProbe'?: V1ContainerReadinessProbe;
    /**
    * Resources resize policy for the container. +featureGate=InPlacePodVerticalScaling +optional +listType=atomic
    */
    'resizePolicy'?: Array<V1ContainerResizePolicy>;
    'resources'?: V1ContainerResources;
    'securityContext'?: V1ContainerSecurityContext;
    'startupProbe'?: V1ContainerStartupProbe;
    /**
    * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. +optional
    */
    'stdin'?: boolean;
    /**
    * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false +optional
    */
    'stdinOnce'?: boolean;
    /**
    * Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. +optional
    */
    'terminationMessagePath'?: string;
    'terminationMessagePolicy'?: V1TerminationMessagePolicy;
    /**
    * Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false. +optional
    */
    'tty'?: boolean;
    /**
    * volumeDevices is the list of block devices to be used by the container. +patchMergeKey=devicePath +patchStrategy=merge +optional
    */
    'volumeDevices'?: Array<V1VolumeDevice>;
    /**
    * Pod volumes to mount into the container\'s filesystem. Cannot be updated. +optional +patchMergeKey=mountPath +patchStrategy=merge
    */
    'volumeMounts'?: Array<V1VolumeMount>;
    /**
    * Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated. +optional
    */
    'workingDir'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "Array<V1EnvVar>",
            "format": ""
        },
        {
            "name": "envFrom",
            "baseName": "envFrom",
            "type": "Array<V1EnvFromSource>",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "V1PullPolicy",
            "format": ""
        },
        {
            "name": "lifecycle",
            "baseName": "lifecycle",
            "type": "V1ContainerLifecycle",
            "format": ""
        },
        {
            "name": "livenessProbe",
            "baseName": "livenessProbe",
            "type": "V1ContainerLivenessProbe",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1ContainerPort>",
            "format": ""
        },
        {
            "name": "readinessProbe",
            "baseName": "readinessProbe",
            "type": "V1ContainerReadinessProbe",
            "format": ""
        },
        {
            "name": "resizePolicy",
            "baseName": "resizePolicy",
            "type": "Array<V1ContainerResizePolicy>",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1ContainerResources",
            "format": ""
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "V1ContainerSecurityContext",
            "format": ""
        },
        {
            "name": "startupProbe",
            "baseName": "startupProbe",
            "type": "V1ContainerStartupProbe",
            "format": ""
        },
        {
            "name": "stdin",
            "baseName": "stdin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "stdinOnce",
            "baseName": "stdinOnce",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "terminationMessagePath",
            "baseName": "terminationMessagePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "terminationMessagePolicy",
            "baseName": "terminationMessagePolicy",
            "type": "V1TerminationMessagePolicy",
            "format": ""
        },
        {
            "name": "tty",
            "baseName": "tty",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeDevices",
            "baseName": "volumeDevices",
            "type": "Array<V1VolumeDevice>",
            "format": ""
        },
        {
            "name": "volumeMounts",
            "baseName": "volumeMounts",
            "type": "Array<V1VolumeMount>",
            "format": ""
        },
        {
            "name": "workingDir",
            "baseName": "workingDir",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Container.attributeTypeMap;
    }

    public constructor() {
    }
}



