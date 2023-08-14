import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
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
export declare class CloudplaneApiRequestFactory extends BaseAPIRequestFactory {
    adminDeleteIdentity(id: string, _options?: Configuration): Promise<RequestContext>;
    adminGetIdentity(id: string, _options?: Configuration): Promise<RequestContext>;
    adminListIdentity(_options?: Configuration): Promise<RequestContext>;
    adminListIdentityApplication(id: string, _options?: Configuration): Promise<RequestContext>;
    adminPutIdentity(id: string, identity: ClientUpdateIdentityBody, _options?: Configuration): Promise<RequestContext>;
    adminSuspendIdentity(id: string, _options?: Configuration): Promise<RequestContext>;
    deleteAccount(_options?: Configuration): Promise<RequestContext>;
    deleteApplication(name: string, _options?: Configuration): Promise<RequestContext>;
    deleteExportSchedule(name: string, _options?: Configuration): Promise<RequestContext>;
    deleteExportTarget(name: string, _options?: Configuration): Promise<RequestContext>;
    deletePaymentMethod(id: string, _options?: Configuration): Promise<RequestContext>;
    getAccount(_options?: Configuration): Promise<RequestContext>;
    getApplication(name: string, _options?: Configuration): Promise<RequestContext>;
    getApplicationMetrics(name: string, _options?: Configuration): Promise<RequestContext>;
    getExport(name: string, _options?: Configuration): Promise<RequestContext>;
    getExportSchedule(name: string, _options?: Configuration): Promise<RequestContext>;
    getExportTarget(name: string, _options?: Configuration): Promise<RequestContext>;
    listApplication(_options?: Configuration): Promise<RequestContext>;
    listExport(_options?: Configuration): Promise<RequestContext>;
    listExportSchedule(_options?: Configuration): Promise<RequestContext>;
    listExportTarget(_options?: Configuration): Promise<RequestContext>;
    listTemplate(_options?: Configuration): Promise<RequestContext>;
    postSetupIntent(_options?: Configuration): Promise<RequestContext>;
    putAccount(account: V1Account, _options?: Configuration): Promise<RequestContext>;
    putApplication(application: V1alpha1Application, _options?: Configuration): Promise<RequestContext>;
    putExport(_export: V1alpha1Export, _options?: Configuration): Promise<RequestContext>;
    putExportSchedule(schedule: V1alpha1ExportSchedule, _options?: Configuration): Promise<RequestContext>;
    putExportTarget(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<RequestContext>;
    putJob(jobInput: V1JobInput, _options?: Configuration): Promise<RequestContext>;
}
export declare class CloudplaneApiResponseProcessor {
    adminDeleteIdentity(response: ResponseContext): Promise<string>;
    adminGetIdentity(response: ResponseContext): Promise<ClientIdentity>;
    adminListIdentity(response: ResponseContext): Promise<Array<ClientIdentity>>;
    adminListIdentityApplication(response: ResponseContext): Promise<Array<V1alpha1Application>>;
    adminPutIdentity(response: ResponseContext): Promise<string>;
    adminSuspendIdentity(response: ResponseContext): Promise<string>;
    deleteAccount(response: ResponseContext): Promise<string>;
    deleteApplication(response: ResponseContext): Promise<string>;
    deleteExportSchedule(response: ResponseContext): Promise<string>;
    deleteExportTarget(response: ResponseContext): Promise<string>;
    deletePaymentMethod(response: ResponseContext): Promise<string>;
    getAccount(response: ResponseContext): Promise<V1Account>;
    getApplication(response: ResponseContext): Promise<V1alpha1Application>;
    getApplicationMetrics(response: ResponseContext): Promise<V1ApplicationMetrics>;
    getExport(response: ResponseContext): Promise<V1alpha1Export>;
    getExportSchedule(response: ResponseContext): Promise<V1alpha1ExportSchedule>;
    getExportTarget(response: ResponseContext): Promise<V1alpha1ExportTarget>;
    listApplication(response: ResponseContext): Promise<Array<V1alpha1Application>>;
    listExport(response: ResponseContext): Promise<Array<V1alpha1Export>>;
    listExportSchedule(response: ResponseContext): Promise<Array<V1alpha1ExportSchedule>>;
    listExportTarget(response: ResponseContext): Promise<Array<V1alpha1ExportTarget>>;
    listTemplate(response: ResponseContext): Promise<Array<V1alpha1Template>>;
    postSetupIntent(response: ResponseContext): Promise<V1SetupIntent>;
    putAccount(response: ResponseContext): Promise<V1Account>;
    putApplication(response: ResponseContext): Promise<V1alpha1Application>;
    putExport(response: ResponseContext): Promise<V1alpha1Export>;
    putExportSchedule(response: ResponseContext): Promise<V1alpha1ExportSchedule>;
    putExportTarget(response: ResponseContext): Promise<V1alpha1ExportTarget>;
    putJob(response: ResponseContext): Promise<V1JobResponse>;
}
