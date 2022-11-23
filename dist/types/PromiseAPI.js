"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseExportApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseExportApi = (function () {
    function PromiseExportApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableExportApi(configuration, requestFactory, responseProcessor);
    }
    PromiseExportApi.prototype.v1ExportGet = function (_options) {
        var result = this.api.v1ExportGet(_options);
        return result.toPromise();
    };
    PromiseExportApi.prototype.v1ExportNameGet = function (name, _options) {
        var result = this.api.v1ExportNameGet(name, _options);
        return result.toPromise();
    };
    PromiseExportApi.prototype.v1ExportPut = function (_export, _options) {
        var result = this.api.v1ExportPut(_export, _options);
        return result.toPromise();
    };
    PromiseExportApi.prototype.v1ExportTargetGet = function (_options) {
        var result = this.api.v1ExportTargetGet(_options);
        return result.toPromise();
    };
    PromiseExportApi.prototype.v1ExportTargetNameGet = function (name, _options) {
        var result = this.api.v1ExportTargetNameGet(name, _options);
        return result.toPromise();
    };
    PromiseExportApi.prototype.v1ExportTargetPut = function (exportTarget, _options) {
        var result = this.api.v1ExportTargetPut(exportTarget, _options);
        return result.toPromise();
    };
    return PromiseExportApi;
}());
exports.PromiseExportApi = PromiseExportApi;
//# sourceMappingURL=PromiseAPI.js.map