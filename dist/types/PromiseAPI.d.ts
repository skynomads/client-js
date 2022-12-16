import { Configuration } from '../configuration';
import { MainJobInput } from '../models/MainJobInput';
import { V1Job } from '../models/V1Job';
import { V1alpha1Application } from '../models/V1alpha1Application';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportSchedule } from '../models/V1alpha1ExportSchedule';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { CloudplaneApiRequestFactory, CloudplaneApiResponseProcessor } from "../apis/CloudplaneApi";
export declare class PromiseCloudplaneApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CloudplaneApiRequestFactory, responseProcessor?: CloudplaneApiResponseProcessor);
    v1ApplicationGet(_options?: Configuration): Promise<Array<V1alpha1Application>>;
    v1ApplicationNameDelete(name: string, _options?: Configuration): Promise<string>;
    v1ApplicationNameGet(name: string, _options?: Configuration): Promise<V1alpha1Application>;
    v1ApplicationPut(_options?: Configuration): Promise<V1alpha1Application>;
    v1ExportGet(_options?: Configuration): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(name: string, _options?: Configuration): Promise<V1alpha1Export>;
    v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Promise<V1alpha1Export>;
    v1ExportTargetGet(_options?: Configuration): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<V1alpha1ExportTarget>;
    v1ExportscheduleGet(_options?: Configuration): Promise<Array<V1alpha1ExportSchedule>>;
    v1ExportscheduleNameDelete(name: string, _options?: Configuration): Promise<string>;
    v1ExportscheduleNameGet(name: string, _options?: Configuration): Promise<V1alpha1ExportSchedule>;
    v1ExportschedulePut(schedule: V1alpha1ExportSchedule, _options?: Configuration): Promise<V1alpha1ExportSchedule>;
    v1JobPut(jobInput: MainJobInput, _options?: Configuration): Promise<V1Job>;
    v1TemplateGet(_options?: Configuration): Promise<Array<V1alpha1Template>>;
}
