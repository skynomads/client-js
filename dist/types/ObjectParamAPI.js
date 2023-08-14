"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectCloudplaneApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectCloudplaneApi = (function () {
    function ObjectCloudplaneApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCloudplaneApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCloudplaneApi.prototype.adminDeleteIdentity = function (param, options) {
        return this.api.adminDeleteIdentity(param.id, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.adminGetIdentity = function (param, options) {
        return this.api.adminGetIdentity(param.id, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.adminListIdentity = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.adminListIdentity(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.adminListIdentityApplication = function (param, options) {
        return this.api.adminListIdentityApplication(param.id, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.adminPutIdentity = function (param, options) {
        return this.api.adminPutIdentity(param.id, param.identity, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.adminSuspendIdentity = function (param, options) {
        return this.api.adminSuspendIdentity(param.id, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.deleteAccount = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.deleteAccount(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.deleteApplication = function (param, options) {
        return this.api.deleteApplication(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.deleteExportSchedule = function (param, options) {
        return this.api.deleteExportSchedule(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.deleteExportTarget = function (param, options) {
        return this.api.deleteExportTarget(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.deletePaymentMethod = function (param, options) {
        return this.api.deletePaymentMethod(param.id, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.getAccount = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAccount(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.getApplication = function (param, options) {
        return this.api.getApplication(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.getApplicationMetrics = function (param, options) {
        return this.api.getApplicationMetrics(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.getExport = function (param, options) {
        return this.api.getExport(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.getExportSchedule = function (param, options) {
        return this.api.getExportSchedule(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.getExportTarget = function (param, options) {
        return this.api.getExportTarget(param.name, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.listApplication = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listApplication(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.listExport = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listExport(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.listExportSchedule = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listExportSchedule(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.listExportTarget = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listExportTarget(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.listTemplate = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTemplate(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.postSetupIntent = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.postSetupIntent(options).toPromise();
    };
    ObjectCloudplaneApi.prototype.putAccount = function (param, options) {
        return this.api.putAccount(param.account, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.putApplication = function (param, options) {
        return this.api.putApplication(param.application, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.putExport = function (param, options) {
        return this.api.putExport(param._export, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.putExportSchedule = function (param, options) {
        return this.api.putExportSchedule(param.schedule, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.putExportTarget = function (param, options) {
        return this.api.putExportTarget(param.exportTarget, options).toPromise();
    };
    ObjectCloudplaneApi.prototype.putJob = function (param, options) {
        return this.api.putJob(param.jobInput, options).toPromise();
    };
    return ObjectCloudplaneApi;
}());
exports.ObjectCloudplaneApi = ObjectCloudplaneApi;
//# sourceMappingURL=ObjectParamAPI.js.map