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

import { V1LifecycleHandlerExec } from '../models/V1LifecycleHandlerExec';
import { V1LifecycleHandlerHttpGet } from '../models/V1LifecycleHandlerHttpGet';
import { V1LifecycleHandlerTcpSocket } from '../models/V1LifecycleHandlerTcpSocket';
import { HttpFile } from '../http/http';

/**
* PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks +optional
*/
export class V1LifecyclePostStart {
    'exec'?: V1LifecycleHandlerExec;
    'httpGet'?: V1LifecycleHandlerHttpGet;
    'tcpSocket'?: V1LifecycleHandlerTcpSocket;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1LifecycleHandlerExec",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1LifecycleHandlerHttpGet",
            "format": ""
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1LifecycleHandlerTcpSocket",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifecyclePostStart.attributeTypeMap;
    }

    public constructor() {
    }
}

