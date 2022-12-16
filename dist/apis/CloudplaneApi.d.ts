import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { MainJobInput } from '../models/MainJobInput';
import { V1Job } from '../models/V1Job';
import { V1alpha1Application } from '../models/V1alpha1Application';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportSchedule } from '../models/V1alpha1ExportSchedule';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
export declare class CloudplaneApiRequestFactory extends BaseAPIRequestFactory {
    v1ApplicationGet(_options?: Configuration): Promise<RequestContext>;
    v1ApplicationNameDelete(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ApplicationNameGet(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ApplicationPut(_options?: Configuration): Promise<RequestContext>;
    v1ExportGet(_options?: Configuration): Promise<RequestContext>;
    v1ExportNameGet(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Promise<RequestContext>;
    v1ExportTargetGet(_options?: Configuration): Promise<RequestContext>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<RequestContext>;
    v1ExportscheduleGet(_options?: Configuration): Promise<RequestContext>;
    v1ExportscheduleNameDelete(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ExportscheduleNameGet(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ExportschedulePut(schedule: V1alpha1ExportSchedule, _options?: Configuration): Promise<RequestContext>;
    v1JobPut(jobInput: MainJobInput, _options?: Configuration): Promise<RequestContext>;
    v1TemplateGet(_options?: Configuration): Promise<RequestContext>;
}
export declare class CloudplaneApiResponseProcessor {
    v1ApplicationGet(response: ResponseContext): Promise<Array<V1alpha1Application>>;
    v1ApplicationNameDelete(response: ResponseContext): Promise<string>;
    v1ApplicationNameGet(response: ResponseContext): Promise<V1alpha1Application>;
    v1ApplicationPut(response: ResponseContext): Promise<V1alpha1Application>;
    v1ExportGet(response: ResponseContext): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(response: ResponseContext): Promise<V1alpha1Export>;
    v1ExportPut(response: ResponseContext): Promise<V1alpha1Export>;
    v1ExportTargetGet(response: ResponseContext): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(response: ResponseContext): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(response: ResponseContext): Promise<V1alpha1ExportTarget>;
    v1ExportscheduleGet(response: ResponseContext): Promise<Array<V1alpha1ExportSchedule>>;
    v1ExportscheduleNameDelete(response: ResponseContext): Promise<string>;
    v1ExportscheduleNameGet(response: ResponseContext): Promise<V1alpha1ExportSchedule>;
    v1ExportschedulePut(response: ResponseContext): Promise<V1alpha1ExportSchedule>;
    v1JobPut(response: ResponseContext): Promise<V1Job>;
    v1TemplateGet(response: ResponseContext): Promise<Array<V1alpha1Template>>;
}
