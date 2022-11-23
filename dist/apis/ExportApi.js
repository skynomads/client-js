var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseAPIRequestFactory, RequiredError } from './baseapi.js';
import { HttpMethod } from '../http/http.js';
import { ObjectSerializer } from '../models/ObjectSerializer.js';
import { ApiException } from './exception.js';
import { isCodeInRange } from '../util.js';
export class ExportApiRequestFactory extends BaseAPIRequestFactory {
    v1ExportGet(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/v1/export';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    v1ExportNameGet(name, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (name === null || name === undefined) {
                throw new RequiredError("ExportApi", "v1ExportNameGet", "name");
            }
            const localVarPath = '/v1/export/{name}'
                .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    v1ExportPut(_export, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (_export === null || _export === undefined) {
                throw new RequiredError("ExportApi", "v1ExportPut", "_export");
            }
            const localVarPath = '/v1/export';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(_export, "V1alpha1Export", ""), contentType);
            requestContext.setBody(serializedBody);
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    v1ExportTargetGet(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/v1/export/target';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    v1ExportTargetNameGet(name, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (name === null || name === undefined) {
                throw new RequiredError("ExportApi", "v1ExportTargetNameGet", "name");
            }
            const localVarPath = '/v1/export/target/{name}'
                .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    v1ExportTargetPut(exportTarget, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (exportTarget === null || exportTarget === undefined) {
                throw new RequiredError("ExportApi", "v1ExportTargetPut", "exportTarget");
            }
            const localVarPath = '/v1/export/target';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer.stringify(ObjectSerializer.serialize(exportTarget, "V1alpha1ExportTarget", ""), contentType);
            requestContext.setBody(serializedBody);
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
}
export class ExportApiResponseProcessor {
    v1ExportGet(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<V1alpha1Export>", "");
                return body;
            }
            if (isCodeInRange("500", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Internal Server Error", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<V1alpha1Export>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    v1ExportNameGet(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1Export", "");
                return body;
            }
            if (isCodeInRange("500", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Internal Server Error", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1Export", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    v1ExportPut(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1Export", "");
                return body;
            }
            if (isCodeInRange("400", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
            }
            if (isCodeInRange("500", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Internal Server Error", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1Export", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    v1ExportTargetGet(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<V1alpha1ExportTarget>", "");
                return body;
            }
            if (isCodeInRange("500", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Internal Server Error", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<V1alpha1ExportTarget>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    v1ExportTargetNameGet(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1ExportTarget", "");
                return body;
            }
            if (isCodeInRange("500", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Internal Server Error", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1ExportTarget", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    v1ExportTargetPut(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1ExportTarget", "");
                return body;
            }
            if (isCodeInRange("400", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
            }
            if (isCodeInRange("500", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
                throw new ApiException(response.httpStatusCode, "Internal Server Error", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "V1alpha1ExportTarget", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
}
//# sourceMappingURL=ExportApi.js.map