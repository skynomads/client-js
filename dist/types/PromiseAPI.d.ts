import { Configuration } from '../configuration.js';
import { V1alpha1Export } from '../models/V1alpha1Export.js';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget.js';
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi.js";
export declare class PromiseExportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor);
    v1ExportGet(_options?: Configuration): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(name: string, _options?: Configuration): Promise<V1alpha1Export>;
    v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Promise<V1alpha1Export>;
    v1ExportTargetGet(_options?: Configuration): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<V1alpha1ExportTarget>;
}
