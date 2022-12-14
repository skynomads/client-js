import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
export declare class ExportApiRequestFactory extends BaseAPIRequestFactory {
    v1ExportGet(_options?: Configuration): Promise<RequestContext>;
    v1ExportNameGet(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ExportTargetGet(_options?: Configuration): Promise<RequestContext>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Promise<RequestContext>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Promise<RequestContext>;
}
export declare class ExportApiResponseProcessor {
    v1ExportGet(response: ResponseContext): Promise<Array<V1alpha1Export>>;
    v1ExportNameGet(response: ResponseContext): Promise<V1alpha1Export>;
    v1ExportTargetGet(response: ResponseContext): Promise<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(response: ResponseContext): Promise<V1alpha1ExportTarget>;
    v1ExportTargetPut(response: ResponseContext): Promise<V1alpha1ExportTarget>;
}
