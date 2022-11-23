import { ObservableExportApi } from "./ObservableAPI";
export class ObjectExportApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableExportApi(configuration, requestFactory, responseProcessor);
    }
    v1ExportGet(param = {}, options) {
        return this.api.v1ExportGet(options).toPromise();
    }
    v1ExportNameGet(param, options) {
        return this.api.v1ExportNameGet(param.name, options).toPromise();
    }
    v1ExportPut(param, options) {
        return this.api.v1ExportPut(param._export, options).toPromise();
    }
    v1ExportTargetGet(param = {}, options) {
        return this.api.v1ExportTargetGet(options).toPromise();
    }
    v1ExportTargetNameGet(param, options) {
        return this.api.v1ExportTargetNameGet(param.name, options).toPromise();
    }
    v1ExportTargetPut(param, options) {
        return this.api.v1ExportTargetPut(param.exportTarget, options).toPromise();
    }
}
//# sourceMappingURL=ObjectParamAPI.js.map