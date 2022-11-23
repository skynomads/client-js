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
import { ObservableExportApi } from './ObservableAPI.js';

import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi.js";
export class PromiseExportApi {
    private api: ObservableExportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportApiRequestFactory,
        responseProcessor?: ExportApiResponseProcessor
    ) {
        this.api = new ObservableExportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List exports
     */
    public v1ExportGet(_options?: Configuration): Promise<Array<V1alpha1Export>> {
        const result = this.api.v1ExportGet(_options);
        return result.toPromise();
    }

    /**
     * Get export
     * @param name Name
     */
    public v1ExportNameGet(name: string, _options?: Configuration): Promise<V1alpha1Export> {
        const result = this.api.v1ExportNameGet(name, _options);
        return result.toPromise();
    }

    /**
     * Put export
     * @param _export Export
     */
    public v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Promise<V1alpha1Export> {
        const result = this.api.v1ExportPut(_export, _options);
        return result.toPromise();
    }

    /**
     * List export targets
     */
    public v1ExportTargetGet(_options?: Configuration): Promise<Array<V1alpha1ExportTarget>> {
        const result = this.api.v1ExportTargetGet(_options);
        return result.toPromise();
    }

    /**
     * Get export target
     * @param name Name
     */
    public v1ExportTargetNameGet(name: string, _options?: Configuration): Promise<V1alpha1ExportTarget> {
        const result = this.api.v1ExportTargetNameGet(name, _options);
        return result.toPromise();
    }

    /**
     * Put export target
     * @param exportTarget ExportTarget
     */
    public v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<V1alpha1ExportTarget> {
        const result = this.api.v1ExportTargetPut(exportTarget, _options);
        return result.toPromise();
    }


}



