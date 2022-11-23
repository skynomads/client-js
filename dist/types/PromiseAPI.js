import { ObservableExportApi } from './ObservableAPI.js';
export class PromiseExportApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableExportApi(configuration, requestFactory, responseProcessor);
    }
    v1ExportGet(_options) {
        const result = this.api.v1ExportGet(_options);
        return result.toPromise();
    }
    v1ExportNameGet(name, _options) {
        const result = this.api.v1ExportNameGet(name, _options);
        return result.toPromise();
    }
    v1ExportPut(_export, _options) {
        const result = this.api.v1ExportPut(_export, _options);
        return result.toPromise();
    }
    v1ExportTargetGet(_options) {
        const result = this.api.v1ExportTargetGet(_options);
        return result.toPromise();
    }
    v1ExportTargetNameGet(name, _options) {
        const result = this.api.v1ExportTargetNameGet(name, _options);
        return result.toPromise();
    }
    v1ExportTargetPut(exportTarget, _options) {
        const result = this.api.v1ExportTargetPut(exportTarget, _options);
        return result.toPromise();
    }
}
//# sourceMappingURL=PromiseAPI.js.map