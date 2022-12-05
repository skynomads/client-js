"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EphemeralContainerLivenessProbe = void 0;
var V1EphemeralContainerLivenessProbe = (function () {
    function V1EphemeralContainerLivenessProbe() {
    }
    V1EphemeralContainerLivenessProbe.getAttributeTypeMap = function () {
        return V1EphemeralContainerLivenessProbe.attributeTypeMap;
    };
    V1EphemeralContainerLivenessProbe.discriminator = undefined;
    V1EphemeralContainerLivenessProbe.attributeTypeMap = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1LifecycleHandlerExec",
            "format": ""
        },
        {
            "name": "failureThreshold",
            "baseName": "failureThreshold",
            "type": "number",
            "format": ""
        },
        {
            "name": "grpc",
            "baseName": "grpc",
            "type": "V1ProbeGrpc",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1LifecycleHandlerHttpGet",
            "format": ""
        },
        {
            "name": "initialDelaySeconds",
            "baseName": "initialDelaySeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "periodSeconds",
            "baseName": "periodSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "successThreshold",
            "baseName": "successThreshold",
            "type": "number",
            "format": ""
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1ProbeTcpSocket",
            "format": ""
        },
        {
            "name": "terminationGracePeriodSeconds",
            "baseName": "terminationGracePeriodSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number",
            "format": ""
        }
    ];
    return V1EphemeralContainerLivenessProbe;
}());
exports.V1EphemeralContainerLivenessProbe = V1EphemeralContainerLivenessProbe;
//# sourceMappingURL=V1EphemeralContainerLivenessProbe.js.map