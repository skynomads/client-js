import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { MainJobInput } from '../models/MainJobInput';
import { V1Job } from '../models/V1Job';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1Template } from '../models/V1alpha1Template';
import { CloudplaneApiRequestFactory, CloudplaneApiResponseProcessor } from "../apis/CloudplaneApi";
export declare class ObservableCloudplaneApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CloudplaneApiRequestFactory, responseProcessor?: CloudplaneApiResponseProcessor);
    v1ExportGet(_options?: Configuration): Observable<Array<V1alpha1Export>>;
    v1ExportNameGet(name: string, _options?: Configuration): Observable<V1alpha1Export>;
    v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Observable<V1alpha1Export>;
    v1ExportTargetGet(_options?: Configuration): Observable<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Observable<V1alpha1ExportTarget>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Observable<V1alpha1ExportTarget>;
    v1JobPut(jobInput: MainJobInput, _options?: Configuration): Observable<V1Job>;
    v1TemplateGet(_options?: Configuration): Observable<Array<V1alpha1Template>>;
}
