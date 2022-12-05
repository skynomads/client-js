import { Configuration } from '../configuration';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi";
export declare class PromiseExportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor);
    v1ExportGet(_options?: Configuration): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(name: string, _options?: Configuration): Promise<V1alpha1Export>;
    v1ExportTargetGet(_options?: Configuration): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<V1alpha1ExportTarget>;
}
import { TemplateApiRequestFactory, TemplateApiResponseProcessor } from "../apis/TemplateApi";
export declare class PromiseTemplateApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor);
    v1ExportPut(_options?: Configuration): Promise<Array<V1alpha1Template>>;
}
