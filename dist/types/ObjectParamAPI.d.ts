import { Configuration } from '../configuration';
import { MainJobInput } from '../models/MainJobInput';
import { V1Job } from '../models/V1Job';
import { V1alpha1Application } from '../models/V1alpha1Application';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportSchedule } from '../models/V1alpha1ExportSchedule';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { CloudplaneApiRequestFactory, CloudplaneApiResponseProcessor } from "../apis/CloudplaneApi";
export interface CloudplaneApiV1ApplicationGetRequest {
}
export interface CloudplaneApiV1ApplicationNameDeleteRequest {
    name: string;
}
export interface CloudplaneApiV1ApplicationNameGetRequest {
    name: string;
}
export interface CloudplaneApiV1ApplicationPutRequest {
    application: V1alpha1Application;
}
export interface CloudplaneApiV1ExportGetRequest {
}
export interface CloudplaneApiV1ExportNameGetRequest {
    name: string;
}
export interface CloudplaneApiV1ExportPutRequest {
    _export: V1alpha1Export;
}
export interface CloudplaneApiV1ExportTargetGetRequest {
}
export interface CloudplaneApiV1ExportTargetNameGetRequest {
    name: string;
}
export interface CloudplaneApiV1ExportTargetPutRequest {
    exportTarget: V1alpha1ExportTarget;
}
export interface CloudplaneApiV1ExportscheduleGetRequest {
}
export interface CloudplaneApiV1ExportscheduleNameDeleteRequest {
    name: string;
}
export interface CloudplaneApiV1ExportscheduleNameGetRequest {
    name: string;
}
export interface CloudplaneApiV1ExportschedulePutRequest {
    schedule: V1alpha1ExportSchedule;
}
export interface CloudplaneApiV1JobPutRequest {
    jobInput: MainJobInput;
}
export interface CloudplaneApiV1TemplateGetRequest {
}
export declare class ObjectCloudplaneApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CloudplaneApiRequestFactory, responseProcessor?: CloudplaneApiResponseProcessor);
    v1ApplicationGet(param?: CloudplaneApiV1ApplicationGetRequest, options?: Configuration): Promise<Array<V1alpha1Application>>;
    v1ApplicationNameDelete(param: CloudplaneApiV1ApplicationNameDeleteRequest, options?: Configuration): Promise<string>;
    v1ApplicationNameGet(param: CloudplaneApiV1ApplicationNameGetRequest, options?: Configuration): Promise<V1alpha1Application>;
    v1ApplicationPut(param: CloudplaneApiV1ApplicationPutRequest, options?: Configuration): Promise<V1alpha1Application>;
    v1ExportGet(param?: CloudplaneApiV1ExportGetRequest, options?: Configuration): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(param: CloudplaneApiV1ExportNameGetRequest, options?: Configuration): Promise<V1alpha1Export>;
    v1ExportPut(param: CloudplaneApiV1ExportPutRequest, options?: Configuration): Promise<V1alpha1Export>;
    v1ExportTargetGet(param?: CloudplaneApiV1ExportTargetGetRequest, options?: Configuration): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(param: CloudplaneApiV1ExportTargetNameGetRequest, options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(param: CloudplaneApiV1ExportTargetPutRequest, options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportscheduleGet(param?: CloudplaneApiV1ExportscheduleGetRequest, options?: Configuration): Promise<Array<V1alpha1ExportSchedule>>;
    v1ExportscheduleNameDelete(param: CloudplaneApiV1ExportscheduleNameDeleteRequest, options?: Configuration): Promise<string>;
    v1ExportscheduleNameGet(param: CloudplaneApiV1ExportscheduleNameGetRequest, options?: Configuration): Promise<V1alpha1ExportSchedule>;
    v1ExportschedulePut(param: CloudplaneApiV1ExportschedulePutRequest, options?: Configuration): Promise<V1alpha1ExportSchedule>;
    v1JobPut(param: CloudplaneApiV1JobPutRequest, options?: Configuration): Promise<V1Job>;
    v1TemplateGet(param?: CloudplaneApiV1TemplateGetRequest, options?: Configuration): Promise<Array<V1alpha1Template>>;
}
