"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseCloudplaneApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseCloudplaneApi = (function () {
    function PromiseCloudplaneApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCloudplaneApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCloudplaneApi.prototype.adminDeleteIdentity = function (id, _options) {
        var result = this.api.adminDeleteIdentity(id, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.adminGetIdentity = function (id, _options) {
        var result = this.api.adminGetIdentity(id, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.adminListIdentity = function (_options) {
        var result = this.api.adminListIdentity(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.adminListIdentityApplication = function (id, _options) {
        var result = this.api.adminListIdentityApplication(id, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.adminPutIdentity = function (id, identity, _options) {
        var result = this.api.adminPutIdentity(id, identity, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.adminSuspendIdentity = function (id, _options) {
        var result = this.api.adminSuspendIdentity(id, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.deleteAccount = function (_options) {
        var result = this.api.deleteAccount(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.deleteApplication = function (name, _options) {
        var result = this.api.deleteApplication(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.deleteExportSchedule = function (name, _options) {
        var result = this.api.deleteExportSchedule(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.deleteExportTarget = function (name, _options) {
        var result = this.api.deleteExportTarget(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.deletePaymentMethod = function (id, _options) {
        var result = this.api.deletePaymentMethod(id, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.getAccount = function (_options) {
        var result = this.api.getAccount(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.getApplication = function (name, _options) {
        var result = this.api.getApplication(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.getApplicationMetrics = function (name, _options) {
        var result = this.api.getApplicationMetrics(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.getExport = function (name, _options) {
        var result = this.api.getExport(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.getExportSchedule = function (name, _options) {
        var result = this.api.getExportSchedule(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.getExportTarget = function (name, _options) {
        var result = this.api.getExportTarget(name, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.listApplication = function (_options) {
        var result = this.api.listApplication(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.listExport = function (_options) {
        var result = this.api.listExport(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.listExportSchedule = function (_options) {
        var result = this.api.listExportSchedule(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.listExportTarget = function (_options) {
        var result = this.api.listExportTarget(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.listTemplate = function (_options) {
        var result = this.api.listTemplate(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.postSetupIntent = function (_options) {
        var result = this.api.postSetupIntent(_options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.putAccount = function (account, _options) {
        var result = this.api.putAccount(account, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.putApplication = function (application, _options) {
        var result = this.api.putApplication(application, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.putExport = function (_export, _options) {
        var result = this.api.putExport(_export, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.putExportSchedule = function (schedule, _options) {
        var result = this.api.putExportSchedule(schedule, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.putExportTarget = function (exportTarget, _options) {
        var result = this.api.putExportTarget(exportTarget, _options);
        return result.toPromise();
    };
    PromiseCloudplaneApi.prototype.putJob = function (jobInput, _options) {
        var result = this.api.putJob(jobInput, _options);
        return result.toPromise();
    };
    return PromiseCloudplaneApi;
}());
exports.PromiseCloudplaneApi = PromiseCloudplaneApi;
//# sourceMappingURL=PromiseAPI.js.map