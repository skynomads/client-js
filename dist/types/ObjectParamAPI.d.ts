import { Configuration } from '../configuration';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi";
export interface ExportApiV1ExportGetRequest {
}
export interface ExportApiV1ExportNameGetRequest {
    name: string;
}
export interface ExportApiV1ExportTargetGetRequest {
}
export interface ExportApiV1ExportTargetNameGetRequest {
    name: string;
}
export interface ExportApiV1ExportTargetPutRequest {
    exportTarget: V1alpha1ExportTarget;
}
export declare class ObjectExportApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor);
    v1ExportGet(param?: ExportApiV1ExportGetRequest, options?: Configuration): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(param: ExportApiV1ExportNameGetRequest, options?: Configuration): Promise<V1alpha1Export>;
    v1ExportTargetGet(param?: ExportApiV1ExportTargetGetRequest, options?: Configuration): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(param: ExportApiV1ExportTargetNameGetRequest, options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(param: ExportApiV1ExportTargetPutRequest, options?: Configuration): Promise<V1alpha1ExportTarget>;
}
import { TemplateApiRequestFactory, TemplateApiResponseProcessor } from "../apis/TemplateApi";
export interface TemplateApiV1ExportPutRequest {
}
export declare class ObjectTemplateApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor);
    v1ExportPut(param?: TemplateApiV1ExportPutRequest, options?: Configuration): Promise<Array<V1alpha1Template>>;
}
