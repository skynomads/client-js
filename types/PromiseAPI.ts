import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { V1Condition } from '../models/V1Condition';
import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1OwnerReference } from '../models/V1OwnerReference';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportBucket } from '../models/V1alpha1ExportBucket';
import { V1alpha1ExportSpec } from '../models/V1alpha1ExportSpec';
import { V1alpha1ExportStatus } from '../models/V1alpha1ExportStatus';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus';
import { ObservableExportApi } from './ObservableAPI';

import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi";
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
     * @param request Export
     */
    public v1ExportPut(request: V1alpha1Export, _options?: Configuration): Promise<V1alpha1Export> {
        const result = this.api.v1ExportPut(request, _options);
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
     * @param request ExportTarget
     */
    public v1ExportTargetPut(request: V1alpha1ExportTarget, _options?: Configuration): Promise<V1alpha1ExportTarget> {
        const result = this.api.v1ExportTargetPut(request, _options);
        return result.toPromise();
    }


}



