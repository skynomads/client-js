import { Configuration } from '../configuration';
import { MainJobInput } from '../models/MainJobInput';
import { V1Job } from '../models/V1Job';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
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
import { JobApiRequestFactory, JobApiResponseProcessor } from "../apis/JobApi";
export interface JobApiV1ExportPutRequest {
    jobInput: MainJobInput;
}
export declare class ObjectJobApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: JobApiRequestFactory, responseProcessor?: JobApiResponseProcessor);
    v1ExportPut(param: JobApiV1ExportPutRequest, options?: Configuration): Promise<V1Job>;
}
