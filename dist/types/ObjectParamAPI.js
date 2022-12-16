"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectCloudplaneApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectCloudplaneApi = (function () {
    function ObjectCloudplaneApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCloudplaneApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCloudplaneApi.prototype.v1ApplicationGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1ApplicationGet(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ApplicationNameDelete = function (param, options) {
        return this.api.v1ApplicationNameDelete(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ApplicationNameGet = function (param, options) {
        return this.api.v1ApplicationNameGet(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ApplicationPut = function (param, options) {
        return this.api.v1ApplicationPut(param.application, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1ExportGet(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportNameGet = function (param, options) {
        return this.api.v1ExportNameGet(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportPut = function (param, options) {
        return this.api.v1ExportPut(param._export, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportTargetGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1ExportTargetGet(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportTargetNameGet = function (param, options) {
        return this.api.v1ExportTargetNameGet(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportTargetPut = function (param, options) {
        return this.api.v1ExportTargetPut(param.exportTarget, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportscheduleGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1ExportscheduleGet(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportscheduleNameDelete = function (param, options) {
        return this.api.v1ExportscheduleNameDelete(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportscheduleNameGet = function (param, options) {
        return this.api.v1ExportscheduleNameGet(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1ExportschedulePut = function (param, options) {
        return this.api.v1ExportschedulePut(param.schedule, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1JobPut = function (param, options) {
        return this.api.v1JobPut(param.jobInput, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.v1TemplateGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1TemplateGet(options).toPromise();
    };
    return ObjectCloudplaneApi;
}());
exports.ObjectCloudplaneApi = ObjectCloudplaneApi;
//# sourceMappingURL=ObjectParamAPI.js.map