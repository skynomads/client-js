import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { V1Condition } from '../models/V1Condition';
import { V1ManagedFieldsEntry } from '../models/V1ManagedFieldsEntry';
import { V1OwnerReference } from '../models/V1OwnerReference';
import { V1alpha1Export } from '../models/V1alpha1Export';
import { V1alpha1ExportBucket } from '../models/V1alpha1ExportBucket';
import { V1alpha1ExportSpec } from '../models/V1alpha1ExportSpec';
import { V1alpha1ExportStatus } from '../models/V1alpha1ExportStatus';
import { V1alpha1ExportTarget } from '../models/V1alpha1ExportTarget';
import { V1alpha1ExportTargetSpec } from '../models/V1alpha1ExportTargetSpec';
import { V1alpha1ExportTargetStatus } from '../models/V1alpha1ExportTargetStatus';

import { ExportApiRequestFactory, ExportApiResponseProcessor} from "../apis/ExportApi";
export class ObservableExportApi {
    private requestFactory: ExportApiRequestFactory;
    private responseProcessor: ExportApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportApiRequestFactory,
        responseProcessor?: ExportApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportApiResponseProcessor();
    }

    /**
     * List exports
     */
    public v1ExportGet(_options?: Configuration): Observable<Array<V1alpha1Export>> {
        const requestContextPromise = this.requestFactory.v1ExportGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExportGet(rsp)));
            }));
    }

    /**
     * Get export
     * @param name Name
     */
    public v1ExportNameGet(name: string, _options?: Configuration): Observable<V1alpha1Export> {
        const requestContextPromise = this.requestFactory.v1ExportNameGet(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExportNameGet(rsp)));
            }));
    }

    /**
     * Put export
     * @param _export Export
     */
    public v1ExportPut(_export: V1alpha1Export, _options?: Configuration): Observable<V1alpha1Export> {
        const requestContextPromise = this.requestFactory.v1ExportPut(_export, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExportPut(rsp)));
            }));
    }

    /**
     * List export targets
     */
    public v1ExportTargetGet(_options?: Configuration): Observable<Array<V1alpha1ExportTarget>> {
        const requestContextPromise = this.requestFactory.v1ExportTargetGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExportTargetGet(rsp)));
            }));
    }

    /**
     * Get export target
     * @param name Name
     */
    public v1ExportTargetNameGet(name: string, _options?: Configuration): Observable<V1alpha1ExportTarget> {
        const requestContextPromise = this.requestFactory.v1ExportTargetNameGet(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExportTargetNameGet(rsp)));
            }));
    }

    /**
     * Put export target
     * @param exportTarget ExportTarget
     */
    public v1ExportTargetPut(exportTarget: V1alpha1ExportTarget, _options?: Configuration): Observable<V1alpha1ExportTarget> {
        const requestContextPromise = this.requestFactory.v1ExportTargetPut(exportTarget, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ExportTargetPut(rsp)));
            }));
    }

}
