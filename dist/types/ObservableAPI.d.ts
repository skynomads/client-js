import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi";
export declare class ObservableExportApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ExportApiRequestFactory, responseProcessor?: ExportApiResponseProcessor);
    v1ExportGet(_options?: Configuration): Observable<Array<V1alpha1Export>>;
    v1ExportNameGet(name: string, _options?: Configuration): Observable<V1alpha1Export>;
    v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Observable<V1alpha1Export>;
    v1ExportTargetGet(_options?: Configuration): Observable<Array<V1alpha1ExportTarget>>;
    v1ExportTargetNameGet(name: string, _options?: Configuration): Observable<V1alpha1ExportTarget>;
    v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Observable<V1alpha1ExportTarget>;
}
