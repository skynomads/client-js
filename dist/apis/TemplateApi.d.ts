import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { V1alpha1Template } from '../models/V1alpha1Template';
export declare class TemplateApiRequestFactory extends BaseAPIRequestFactory {
    v1ExportPut(_options?: Configuration): Promise<RequestContext>;
}
export declare class TemplateApiResponseProcessor {
    v1ExportPut(response: ResponseContext): Promise<Array<V1alpha1Template>>;
}
