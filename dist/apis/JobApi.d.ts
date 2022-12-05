import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { MainJobInput } from '../models/MainJobInput';
import { V1Job } from '../models/V1Job';
export declare class JobApiRequestFactory extends BaseAPIRequestFactory {
    v1ExportPut(jobInput: MainJobInput, _options?: Configuration): Promise<RequestContext>;
}
export declare class JobApiResponseProcessor {
    v1ExportPut(response: ResponseContext): Promise<V1Job>;
}
