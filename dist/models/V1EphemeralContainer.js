"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EphemeralContainer = void 0;
var V1EphemeralContainer = (function () {
    function V1EphemeralContainer() {
    }
    V1EphemeralContainer.getAttributeTypeMap = function () {
        return V1EphemeralContainer.attributeTypeMap;
    };
    V1EphemeralContainer.discriminator = undefined;
    V1EphemeralContainer.attributeTypeMap = [
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
            "type": "V1EphemeralContainerLifecycle",
            "format": ""
        },
        {
            "name": "livenessProbe",
            "baseName": "livenessProbe",
            "type": "V1EphemeralContainerLivenessProbe",
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
            "type": "V1EphemeralContainerLivenessProbe",
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
            "type": "V1EphemeralContainerResources",
            "format": ""
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "V1EphemeralContainerSecurityContext",
            "format": ""
        },
        {
            "name": "startupProbe",
            "baseName": "startupProbe",
            "type": "V1EphemeralContainerLivenessProbe",
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
            "name": "targetContainerName",
            "baseName": "targetContainerName",
            "type": "string",
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
        }
    ];
    return V1EphemeralContainer;
}());
exports.V1EphemeralContainer = V1EphemeralContainer;
//# sourceMappingURL=V1EphemeralContainer.js.map