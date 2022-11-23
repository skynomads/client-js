"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExportApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectExportApi = (function () {
    function ObjectExportApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableExportApi(configuration, requestFactory, responseProcessor);
    }
    ObjectExportApi.prototype.v1ExportGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1ExportGet(options).toPromise();
    };
    ObjectExportApi.prototype.v1ExportNameGet = function (param, options) {
        return this.api.v1ExportNameGet(param.name, options).toPromise();
    };
    ObjectExportApi.prototype.v1ExportPut = function (param, options) {
        return this.api.v1ExportPut(param._export, options).toPromise();
    };
    ObjectExportApi.prototype.v1ExportTargetGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1ExportTargetGet(options).toPromise();
    };
    ObjectExportApi.prototype.v1ExportTargetNameGet = function (param, options) {
        return this.api.v1ExportTargetNameGet(param.name, options).toPromise();
    };
    ObjectExportApi.prototype.v1ExportTargetPut = function (param, options) {
        return this.api.v1ExportTargetPut(param.exportTarget, options).toPromise();
    };
    return ObjectExportApi;
}());
exports.ObjectExportApi = ObjectExportApi;
//# sourceMappingURL=ObjectParamAPI.js.map