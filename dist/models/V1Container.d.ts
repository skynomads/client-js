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
export declare class V1Container {
    'args'?: Array<string>;
    'command'?: Array<string>;
    'env'?: Array<V1EnvVar>;
    'envFrom'?: Array<V1EnvFromSource>;
    'image'?: string;
    'imagePullPolicy'?: V1PullPolicy;
    'lifecycle'?: V1ContainerLifecycle;
    'livenessProbe'?: V1ContainerLivenessProbe;
    'name'?: string;
    'ports'?: Array<V1ContainerPort>;
    'readinessProbe'?: V1ContainerReadinessProbe;
    'resizePolicy'?: Array<V1ContainerResizePolicy>;
    'resources'?: V1ContainerResources;
    'securityContext'?: V1ContainerSecurityContext;
    'startupProbe'?: V1ContainerStartupProbe;
    'stdin'?: boolean;
    'stdinOnce'?: boolean;
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
