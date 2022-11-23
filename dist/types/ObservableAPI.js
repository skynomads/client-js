import { of, from } from '../rxjsStub';
import { mergeMap, map } from '../rxjsStub';
import { ExportApiRequestFactory, ExportApiResponseProcessor } from "../apis/ExportApi";
export class ObservableExportApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportApiResponseProcessor();
    }
    v1ExportGet(_options) {
        const requestContextPromise = this.requestFactory.v1ExportGet(_options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.v1ExportGet(rsp)));
        }));
    }
    v1ExportNameGet(name, _options) {
        const requestContextPromise = this.requestFactory.v1ExportNameGet(name, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.v1ExportNameGet(rsp)));
        }));
    }
    v1ExportPut(_export, _options) {
        const requestContextPromise = this.requestFactory.v1ExportPut(_export, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.v1ExportPut(rsp)));
        }));
    }
    v1ExportTargetGet(_options) {
        const requestContextPromise = this.requestFactory.v1ExportTargetGet(_options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.v1ExportTargetGet(rsp)));
        }));
    }
    v1ExportTargetNameGet(name, _options) {
        const requestContextPromise = this.requestFactory.v1ExportTargetNameGet(name, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.v1ExportTargetNameGet(rsp)));
        }));
    }
    v1ExportTargetPut(exportTarget, _options) {
        const requestContextPromise = this.requestFactory.v1ExportTargetPut(exportTarget, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.v1ExportTargetPut(rsp)));
        }));
    }
}
//# sourceMappingURL=ObservableAPI.js.map