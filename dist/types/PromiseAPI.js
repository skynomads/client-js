"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseTemplateApi = exports.PromiseExportApi = void 0;
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
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseTemplateApi = (function () {
    function PromiseTemplateApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }
    PromiseTemplateApi.prototype.v1ExportPut = function (_options) {
        var result = this.api.v1ExportPut(_options);
        return result.toPromise();
    };
    return PromiseTemplateApi;
}());
exports.PromiseTemplateApi = PromiseTemplateApi;
//# sourceMappingURL=PromiseAPI.js.map