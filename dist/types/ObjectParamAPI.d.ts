import { Configuration } from '../configuration';
import { ClientIdentity } from '../models/ClientIdentity';
import { ClientUpdateIdentityBody } from '../models/ClientUpdateIdentityBody';
import { V1Account } from '../models/V1Account';
import { V1ApplicationMetrics } from '../models/V1ApplicationMetrics';
import { V1JobInput } from '../models/V1JobInput';
import { V1JobResponse } from '../models/V1JobResponse';
import { V1SetupIntent } from '../models/V1SetupIntent';
import { V1alpha1Application } from '../models/V1alpha1Application';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportSchedule } from '../models/V1alpha1ExportSchedule';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { CloudplaneApiRequestFactory, CloudplaneApiResponseProcessor } from "../apis/CloudplaneApi";
export interface CloudplaneApiAdminDeleteIdentityRequest {
    id: string;
}
export interface CloudplaneApiAdminGetIdentityRequest {
    id: string;
}
export interface CloudplaneApiAdminListIdentityRequest {
}
export interface CloudplaneApiAdminListIdentityApplicationRequest {
    id: string;
}
export interface CloudplaneApiAdminPutIdentityRequest {
    id: string;
    identity: ClientUpdateIdentityBody;
}
export interface CloudplaneApiAdminSuspendIdentityRequest {
    id: string;
}
export interface CloudplaneApiDeleteAccountRequest {
}
export interface CloudplaneApiDeleteApplicationRequest {
    name: string;
}
export interface CloudplaneApiDeleteExportScheduleRequest {
    name: string;
}
export interface CloudplaneApiDeleteExportTargetRequest {
    name: string;
}
export interface CloudplaneApiDeletePaymentMethodRequest {
    id: string;
}
export interface CloudplaneApiGetAccountRequest {
}
export interface CloudplaneApiGetApplicationRequest {
    name: string;
}
export interface CloudplaneApiGetApplicationMetricsRequest {
    name: string;
}
export interface CloudplaneApiGetExportRequest {
    name: string;
}
export interface CloudplaneApiGetExportScheduleRequest {
    name: string;
}
export interface CloudplaneApiGetExportTargetRequest {
    name: string;
}
export interface CloudplaneApiListApplicationRequest {
}
export interface CloudplaneApiListExportRequest {
}
export interface CloudplaneApiListExportScheduleRequest {
}
export interface CloudplaneApiListExportTargetRequest {
}
export interface CloudplaneApiListTemplateRequest {
}
export interface CloudplaneApiPostSetupIntentRequest {
}
export interface CloudplaneApiPutAccountRequest {
    account: V1Account;
}
export interface CloudplaneApiPutApplicationRequest {
    application: V1alpha1Application;
}
export interface CloudplaneApiPutExportRequest {
    _export: V1alpha1Export;
}
export interface CloudplaneApiPutExportScheduleRequest {
    schedule: V1alpha1ExportSchedule;
}
export interface CloudplaneApiPutExportTargetRequest {
    exportTarget: V1alpha1ExportTarget;
}
export interface CloudplaneApiPutJobRequest {
    jobInput: V1JobInput;
}
export declare class ObjectCloudplaneApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CloudplaneApiRequestFactory, responseProcessor?: CloudplaneApiResponseProcessor);
    adminDeleteIdentity(param: CloudplaneApiAdminDeleteIdentityRequest, options?: Configuration): Promise<string>;
    adminGetIdentity(param: CloudplaneApiAdminGetIdentityRequest, options?: Configuration): Promise<ClientIdentity>;
    adminListIdentity(param?: CloudplaneApiAdminListIdentityRequest, options?: Configuration): Promise<Array<ClientIdentity>>;
    adminListIdentityApplication(param: CloudplaneApiAdminListIdentityApplicationRequest, options?: Configuration): Promise<Array<V1alpha1Application>>;
    adminPutIdentity(param: CloudplaneApiAdminPutIdentityRequest, options?: Configuration): Promise<string>;
    adminSuspendIdentity(param: CloudplaneApiAdminSuspendIdentityRequest, options?: Configuration): Promise<string>;
    deleteAccount(param?: CloudplaneApiDeleteAccountRequest, options?: Configuration): Promise<string>;
    deleteApplication(param: CloudplaneApiDeleteApplicationRequest, options?: Configuration): Promise<string>;
    deleteExportSchedule(param: CloudplaneApiDeleteExportScheduleRequest, options?: Configuration): Promise<string>;
    deleteExportTarget(param: CloudplaneApiDeleteExportTargetRequest, options?: Configuration): Promise<string>;
    deletePaymentMethod(param: CloudplaneApiDeletePaymentMethodRequest, options?: Configuration): Promise<string>;
    getAccount(param?: CloudplaneApiGetAccountRequest, options?: Configuration): Promise<V1Account>;
    getApplication(param: CloudplaneApiGetApplicationRequest, options?: Configuration): Promise<V1alpha1Application>;
    getApplicationMetrics(param: CloudplaneApiGetApplicationMetricsRequest, options?: Configuration): Promise<V1ApplicationMetrics>;
    getExport(param: CloudplaneApiGetExportRequest, options?: Configuration): Promise<V1alpha1Export>;
    getExportSchedule(param: CloudplaneApiGetExportScheduleRequest, options?: Configuration): Promise<V1alpha1ExportSchedule>;
    getExportTarget(param: CloudplaneApiGetExportTargetRequest, options?: Configuration): Promise<V1alpha1ExportTarget>;
    listApplication(param?: CloudplaneApiListApplicationRequest, options?: Configuration): Promise<Array<V1alpha1Application>>;
    listExport(param?: CloudplaneApiListExportRequest, options?: Configuration): Promise<Array<V1alpha1Export>>;
    listExportSchedule(param?: CloudplaneApiListExportScheduleRequest, options?: Configuration): Promise<Array<V1alpha1ExportSchedule>>;
    listExportTarget(param?: CloudplaneApiListExportTargetRequest, options?: Configuration): Promise<Array<V1alpha1ExportTarget>>;
    listTemplate(param?: CloudplaneApiListTemplateRequest, options?: Configuration): Promise<Array<V1alpha1Template>>;
    postSetupIntent(param?: CloudplaneApiPostSetupIntentRequest, options?: Configuration): Promise<V1SetupIntent>;
    putAccount(param: CloudplaneApiPutAccountRequest, options?: Configuration): Promise<V1Account>;
    putApplication(param: CloudplaneApiPutApplicationRequest, options?: Configuration): Promise<V1alpha1Application>;
    putExport(param: CloudplaneApiPutExportRequest, options?: Configuration): Promise<V1alpha1Export>;
    putExportSchedule(param: CloudplaneApiPutExportScheduleRequest, options?: Configuration): Promise<V1alpha1ExportSchedule>;
    putExportTarget(param: CloudplaneApiPutExportTargetRequest, options?: Configuration): Promise<V1alpha1ExportTarget>;
    putJob(param: CloudplaneApiPutJobRequest, options?: Configuration): Promise<V1JobResponse>;
}
