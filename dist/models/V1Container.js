"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Container = void 0;
var V1Container = (function () {
    function V1Container() {
    }
    V1Container.getAttributeTypeMap = function () {
        return V1Container.attributeTypeMap;
    };
    V1Container.discriminator = undefined;
    V1Container.attributeTypeMap = [
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
        }
    ];
    return V1Container;
}());
exports.V1Container = V1Container;
//# sourceMappingURL=V1Container.js.map