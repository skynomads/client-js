"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseCloudplaneApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseCloudplaneApi = (function () {
    function PromiseCloudplaneApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCloudplaneApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCloudplaneApi.prototype.v1ExportGet = function (_options) {
        var result = this.api.v1ExportGet(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportNameGet = function (name, _options) {
        var result = this.api.v1ExportNameGet(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportPut = function (_export, _options) {
        var result = this.api.v1ExportPut(_export, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportTargetGet = function (_options) {
        var result = this.api.v1ExportTargetGet(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportTargetNameGet = function (name, _options) {
        var result = this.api.v1ExportTargetNameGet(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportTargetPut = function (exportTarget, _options) {
        var result = this.api.v1ExportTargetPut(exportTarget, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportscheduleGet = function (_options) {
        var result = this.api.v1ExportscheduleGet(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportscheduleNameGet = function (name, _options) {
        var result = this.api.v1ExportscheduleNameGet(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1ExportschedulePut = function (schedule, _options) {
        var result = this.api.v1ExportschedulePut(schedule, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1JobPut = function (jobInput, _options) {
        var result = this.api.v1JobPut(jobInput, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.v1TemplateGet = function (_options) {
        var result = this.api.v1TemplateGet(_options);
        return result.toPromise();
    };
    return PromiseCloudplaneApi;
}());
exports.PromiseCloudplaneApi = PromiseCloudplaneApi;
//# sourceMappingURL=PromiseAPI.js.map