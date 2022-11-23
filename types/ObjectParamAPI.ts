import { ResponseContext, RequestContext, HttpFile } from '../http/http.js';
import { Configuration} from '../configuration.js'

import { V1Condition } from '../models/V1Condition.js';
import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry.js';
import { V1OwnerReference } from '../models/V1OwnerReference.js';
import { V1alpha1Export } from '../models/V1alpha1Export.js';
import { V1alpha1ExportBucket } from '../models/V1alpha1ExportBucket.js';
import { V1alpha1ExportSpec } from '../models/V1alpha1ExportSpec.js';
import { V1alpha1ExportStatus } from '../models/V1alpha1ExportStatus.js';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget.js';
import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec.js';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus.js';

import { ObservableExportApi } from "./ObservableAPI.js";
import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi.js";

export interface ExportApiV1ExportGetRequest {
}

export interface ExportApiV1ExportNameGetRequest {
    /**
     * Name
     * @type string
     * @memberof ExportApiv1ExportNameGet
     */
    name: string
}

export interface ExportApiV1ExportPutRequest {
    /**
     * Export
     * @type V1alpha1Export
     * @memberof ExportApiv1ExportPut
     */
    _export: V1alpha1Export
}

export interface ExportApiV1ExportTargetGetRequest {
}

export interface ExportApiV1ExportTargetNameGetRequest {
    /**
     * Name
     * @type string
     * @memberof ExportApiv1ExportTargetNameGet
     */
    name: string
}

export interface ExportApiV1ExportTargetPutRequest {
    /**
     * ExportTarget
     * @type V1alpha1ExportTarget
     * @memberof ExportApiv1ExportTargetPut
     */
    exportTarget: V1alpha1ExportTarget
}

export class ObjectExportApi {
    private api: ObservableExportApi

    public constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor) {
        this.api = new ObservableExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List exports
     * @param param the request object
     */
    public v1ExportGet(param: ExportApiV1ExportGetRequest = {}, options?: Configuration): Promise<Array<V1alpha1Export>> {
        return this.api.v1ExportGet( options).toPromise();
    }

    /**
     * Get export
     * @param param the request object
     */
    public v1ExportNameGet(param: ExportApiV1ExportNameGetRequest, options?: Configuration): Promise<V1alpha1Export> {
        return this.api.v1ExportNameGet(param.name,  options).toPromise();
    }

    /**
     * Put export
     * @param param the request object
     */
    public v1ExportPut(param: ExportApiV1ExportPutRequest, options?: Configuration): Promise<V1alpha1Export> {
        return this.api.v1ExportPut(param._export,  options).toPromise();
    }

    /**
     * List export targets
     * @param param the request object
     */
    public v1ExportTargetGet(param: ExportApiV1ExportTargetGetRequest = {}, options?: Configuration): Promise<Array<V1alpha1ExportTarget>> {
        return this.api.v1ExportTargetGet( options).toPromise();
    }

    /**
     * Get export target
     * @param param the request object
     */
    public v1ExportTargetNameGet(param: ExportApiV1ExportTargetNameGetRequest, options?: Configuration): Promise<V1alpha1ExportTarget> {
        return this.api.v1ExportTargetNameGet(param.name,  options).toPromise();
    }

    /**
     * Put export target
     * @param param the request object
     */
    public v1ExportTargetPut(param: ExportApiV1ExportTargetPutRequest, options?: Configuration): Promise<V1alpha1ExportTarget> {
        return this.api.v1ExportTargetPut(param.exportTarget,  options).toPromise();
    }

}
