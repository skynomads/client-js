import { V1ContainerPort } from '../models/V1ContainerPort';
import { V1ContainerResizePolicy } from '../models/V1ContainerResizePolicy';
import { V1EnvFromSource } from '../models/V1EnvFromSource';
import { V1EnvVar } from '../models/V1EnvVar';
import { V1EphemeralContainerLifecycle } from '../models/V1EphemeralContainerLifecycle';
import { V1EphemeralContainerLivenessProbe } from '../models/V1EphemeralContainerLivenessProbe';
import { V1EphemeralContainerResources } from '../models/V1EphemeralContainerResources';
import { V1EphemeralContainerSecurityContext } from '../models/V1EphemeralContainerSecurityContext';
import { V1PullPolicy } from '../models/V1PullPolicy';
import { V1TerminationMessagePolicy } from '../models/V1TerminationMessagePolicy';
import { V1VolumeDevice } from '../models/V1VolumeDevice';
import { V1VolumeMount } from '../models/V1VolumeMount';
export declare class V1EphemeralContainer {
    'args'?: Array<string>;
    'command'?: Array<string>;
    'env'?: Array<V1EnvVar>;
    'envFrom'?: Array<V1EnvFromSource>;
    'image'?: string;
    'imagePullPolicy'?: V1PullPolicy;
    'lifecycle'?: V1EphemeralContainerLifecycle;
    'livenessProbe'?: V1EphemeralContainerLivenessProbe;
    'name'?: string;
    'ports'?: Array<V1ContainerPort>;
    'readinessProbe'?: V1EphemeralContainerLivenessProbe;
    'resizePolicy'?: Array<V1ContainerResizePolicy>;
    'resources'?: V1EphemeralContainerResources;
    'securityContext'?: V1EphemeralContainerSecurityContext;
    'startupProbe'?: V1EphemeralContainerLivenessProbe;
    'stdin'?: boolean;
    'stdinOnce'?: boolean;
    'targetContainerName'?: string;
    'terminationMessagePath'?: string;
    'terminationMessagePolicy'?: V1TerminationMessagePolicy;
    'tty'?: boolean;
    'volumeDevices'?: Array<V1VolumeDevice>;
    'volumeMounts'?: Array<V1VolumeMount>;
    'workingDir'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}