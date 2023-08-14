# .CloudplaneApi

All URIs are relative to *http://cloudplane.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminDeleteIdentity**](CloudplaneApi.md#adminDeleteIdentity) | **DELETE** /v1/admin/identity/{id} | Delete identity
[**adminGetIdentity**](CloudplaneApi.md#adminGetIdentity) | **GET** /v1/admin/identity/{id} | Get identity
[**adminListIdentity**](CloudplaneApi.md#adminListIdentity) | **GET** /v1/admin/identity | List identities
[**adminListIdentityApplication**](CloudplaneApi.md#adminListIdentityApplication) | **GET** /v1/admin/identity/{id}/applications | Get identity applications
[**adminPutIdentity**](CloudplaneApi.md#adminPutIdentity) | **PUT** /v1/admin/identity/{id} | Update identity
[**adminSuspendIdentity**](CloudplaneApi.md#adminSuspendIdentity) | **POST** /v1/admin/identity/{id}/suspend | Suspend identity
[**deleteAccount**](CloudplaneApi.md#deleteAccount) | **DELETE** /v1/account | Delete account
[**deleteApplication**](CloudplaneApi.md#deleteApplication) | **DELETE** /v1/application/{name} | Delete application
[**deleteExportSchedule**](CloudplaneApi.md#deleteExportSchedule) | **DELETE** /v1/exportschedule/{name} | Delete export schedule
[**deleteExportTarget**](CloudplaneApi.md#deleteExportTarget) | **DELETE** /v1/exporttarget/{name} | Delete export target
[**deletePaymentMethod**](CloudplaneApi.md#deletePaymentMethod) | **DELETE** /v1/account/paymentmethod/{id} | Delete payment method
[**getAccount**](CloudplaneApi.md#getAccount) | **GET** /v1/account | Get account
[**getApplication**](CloudplaneApi.md#getApplication) | **GET** /v1/application/{name} | Get application
[**getApplicationMetrics**](CloudplaneApi.md#getApplicationMetrics) | **GET** /v1/application/{name}/metrics | Get application metrics
[**getExport**](CloudplaneApi.md#getExport) | **GET** /v1/export/{name} | Get export
[**getExportSchedule**](CloudplaneApi.md#getExportSchedule) | **GET** /v1/exportschedule/{name} | Get export schedule
[**getExportTarget**](CloudplaneApi.md#getExportTarget) | **GET** /v1/exporttarget/{name} | Get export target
[**listApplication**](CloudplaneApi.md#listApplication) | **GET** /v1/application | List applications
[**listExport**](CloudplaneApi.md#listExport) | **GET** /v1/export | List exports
[**listExportSchedule**](CloudplaneApi.md#listExportSchedule) | **GET** /v1/exportschedule | List export schedules
[**listExportTarget**](CloudplaneApi.md#listExportTarget) | **GET** /v1/exporttarget | List export targets
[**listTemplate**](CloudplaneApi.md#listTemplate) | **GET** /v1/template | List templates
[**postSetupIntent**](CloudplaneApi.md#postSetupIntent) | **POST** /v1/account/setupintent | Create setup intent
[**putAccount**](CloudplaneApi.md#putAccount) | **PUT** /v1/account | Put account
[**putApplication**](CloudplaneApi.md#putApplication) | **PUT** /v1/application | Put application.
[**putExport**](CloudplaneApi.md#putExport) | **PUT** /v1/export | Put export
[**putExportSchedule**](CloudplaneApi.md#putExportSchedule) | **PUT** /v1/exportschedule | Put export schedule
[**putExportTarget**](CloudplaneApi.md#putExportTarget) | **PUT** /v1/exporttarget | Put export target
[**putJob**](CloudplaneApi.md#putJob) | **PUT** /v1/job | Put job


# **adminDeleteIdentity**
> string adminDeleteIdentity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiAdminDeleteIdentityRequest = {
  // string | ID
  id: "id_example",
};

apiInstance.adminDeleteIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adminGetIdentity**
> ClientIdentity adminGetIdentity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiAdminGetIdentityRequest = {
  // string | ID
  id: "id_example",
};

apiInstance.adminGetIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID | defaults to undefined


### Return type

**ClientIdentity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adminListIdentity**
> Array<ClientIdentity> adminListIdentity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.adminListIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ClientIdentity>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adminListIdentityApplication**
> Array<V1alpha1Application> adminListIdentityApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiAdminListIdentityApplicationRequest = {
  // string | ID
  id: "id_example",
};

apiInstance.adminListIdentityApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID | defaults to undefined


### Return type

**Array<V1alpha1Application>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adminPutIdentity**
> string adminPutIdentity(identity)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiAdminPutIdentityRequest = {
  // string | ID
  id: "id_example",
  // ClientUpdateIdentityBody | Identity
  identity: {
    credentials: {
      oidc: {
        config: {
          config: {
            hashedPassword: "hashedPassword_example",
            password: "password_example",
          },
          providers: [
            {
              provider: "provider_example",
              subject: "subject_example",
            },
          ],
        },
      },
      password: {
        config: {
          hashedPassword: "hashedPassword_example",
          password: "password_example",
        },
      },
    },
    metadataAdmin: {},
    metadataPublic: {},
    schemaId: "schemaId_example",
    state: "active",
    traits: {},
  },
};

apiInstance.adminPutIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identity** | **ClientUpdateIdentityBody**| Identity |
 **id** | [**string**] | ID | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **adminSuspendIdentity**
> string adminSuspendIdentity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiAdminSuspendIdentityRequest = {
  // string | ID
  id: "id_example",
};

apiInstance.adminSuspendIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAccount**
> string deleteAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.deleteAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplication**
> string deleteApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiDeleteApplicationRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.deleteApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteExportSchedule**
> string deleteExportSchedule()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiDeleteExportScheduleRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.deleteExportSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteExportTarget**
> string deleteExportTarget()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiDeleteExportTargetRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.deleteExportTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePaymentMethod**
> string deletePaymentMethod()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiDeletePaymentMethodRequest = {
  // string | ID
  id: "id_example",
};

apiInstance.deletePaymentMethod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccount**
> V1Account getAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.getAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1Account**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplication**
> V1alpha1Application getApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiGetApplicationRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.getApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**V1alpha1Application**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationMetrics**
> V1ApplicationMetrics getApplicationMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiGetApplicationMetricsRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.getApplicationMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**V1ApplicationMetrics**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExport**
> V1alpha1Export getExport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiGetExportRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.getExport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**V1alpha1Export**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExportSchedule**
> V1alpha1ExportSchedule getExportSchedule()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiGetExportScheduleRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.getExportSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**V1alpha1ExportSchedule**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExportTarget**
> V1alpha1ExportTarget getExportTarget()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiGetExportTargetRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.getExportTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name | defaults to undefined


### Return type

**V1alpha1ExportTarget**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplication**
> Array<V1alpha1Application> listApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.listApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<V1alpha1Application>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listExport**
> Array<V1alpha1Export> listExport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.listExport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<V1alpha1Export>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listExportSchedule**
> Array<V1alpha1ExportSchedule> listExportSchedule()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.listExportSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<V1alpha1ExportSchedule>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listExportTarget**
> Array<V1alpha1ExportTarget> listExportTarget()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.listExportTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<V1alpha1ExportTarget>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplate**
> Array<V1alpha1Template> listTemplate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.listTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<V1alpha1Template>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postSetupIntent**
> V1SetupIntent postSetupIntent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.postSetupIntent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1SetupIntent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putAccount**
> V1Account putAccount(account)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiPutAccountRequest = {
  // V1Account | Account
  account: {
    customer: {
      address: {
        city: "city_example",
        country: "country_example",
        line1: "line1_example",
        line2: "line2_example",
        postalCode: "postalCode_example",
        state: "state_example",
      },
      balance: 1,
      defaultPaymentMethod: "defaultPaymentMethod_example",
      email: "email_example",
      invoices: [
        {
          amountDue: 1,
          amountRemaining: 1,
          created: 1,
          dueDate: 1,
          hostedInvoiceURL: "hostedInvoiceURL_example",
          id: "id_example",
          invoicePDF: "invoicePDF_example",
          number: "number_example",
          periodEnd: 1,
          periodStart: 1,
          status: "draft",
        },
      ],
      name: "name_example",
      taxID: {
        type: "ae_trn",
        value: "value_example",
      },
      vatRate: 3.14,
    },
    paymentMethods: [
      {
        id: "id_example",
        isDefault: true,
        number: "number_example",
        subtype: "subtype_example",
        type: "acss_debit",
      },
    ],
  },
};

apiInstance.putAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **V1Account**| Account |


### Return type

**V1Account**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putApplication**
> V1alpha1Application putApplication(application)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiPutApplicationRequest = {
  // V1alpha1Application | Application
  application: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: "creationTimestamp_example",
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: "deletionTimestamp_example",
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: ,
          manager: "manager_example",
          operation: ,
          subresource: "subresource_example",
          time: "time_example",
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      blockStorage: {
        size: {
          format: "DecimalExponent",
        },
      },
      domains: ,
      instance: "instance_example",
      name: "name_example",
      pool: "pool_example",
      replicas: 1,
      type: "type_example",
      values: ,
    },
    status: {
      conditions: [
        {
          lastTransitionTime: "lastTransitionTime_example",
          message: "message_example",
          observedGeneration: 1,
          reason: "reason_example",
          status: ,
          type: "type_example",
        },
      ],
      hosts: [
        "hosts_example",
      ],
    },
  },
};

apiInstance.putApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **V1alpha1Application**| Application |


### Return type

**V1alpha1Application**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putExport**
> V1alpha1Export putExport(_export)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiPutExportRequest = {
  // V1alpha1Export | Export
  _export: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: ,
    spec: {
      application: "application_example",
      path: "path_example",
      target: "target_example",
    },
    status: {
      conditions: [
        {
          lastTransitionTime: "lastTransitionTime_example",
          message: "message_example",
          observedGeneration: 1,
          reason: "reason_example",
          status: ,
          type: "type_example",
        },
      ],
      destinationPath: "destinationPath_example",
      logs: {
        "key": "key_example",
      },
    },
  },
};

apiInstance.putExport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_export** | **V1alpha1Export**| Export |


### Return type

**V1alpha1Export**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putExportSchedule**
> V1alpha1ExportSchedule putExportSchedule(schedule)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiPutExportScheduleRequest = {
  // V1alpha1ExportSchedule | ExportSchedule
  schedule: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: "creationTimestamp_example",
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: "deletionTimestamp_example",
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: ,
          manager: "manager_example",
          operation: ,
          subresource: "subresource_example",
          time: "time_example",
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      schedule: "schedule_example",
      template: {
        apiVersion: "apiVersion_example",
        kind: "kind_example",
        metadata: ,
        spec: {
          application: "application_example",
          path: "path_example",
          target: "target_example",
        },
        status: {
          conditions: [
            {
              lastTransitionTime: "lastTransitionTime_example",
              message: "message_example",
              observedGeneration: 1,
              reason: "reason_example",
              status: ,
              type: "type_example",
            },
          ],
          destinationPath: "destinationPath_example",
          logs: {
            "key": "key_example",
          },
        },
      },
    },
    status: {
      conditions: [
        {
          lastTransitionTime: "lastTransitionTime_example",
          message: "message_example",
          observedGeneration: 1,
          reason: "reason_example",
          status: ,
          type: "type_example",
        },
      ],
    },
  },
};

apiInstance.putExportSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | **V1alpha1ExportSchedule**| ExportSchedule |


### Return type

**V1alpha1ExportSchedule**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putExportTarget**
> V1alpha1ExportTarget putExportTarget(exportTarget)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiPutExportTargetRequest = {
  // V1alpha1ExportTarget | ExportTarget
  exportTarget: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: "creationTimestamp_example",
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: "deletionTimestamp_example",
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: ,
          manager: "manager_example",
          operation: ,
          subresource: "subresource_example",
          time: "time_example",
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      bucket: {
        accessKey: "accessKey_example",
        endpoint: "endpoint_example",
        name: "name_example",
        region: "region_example",
        secretKey: "secretKey_example",
      },
    },
    status: {
      conditions: [
        {
          lastTransitionTime: "lastTransitionTime_example",
          message: "message_example",
          observedGeneration: 1,
          reason: "reason_example",
          status: ,
          type: "type_example",
        },
      ],
    },
  },
};

apiInstance.putExportTarget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportTarget** | **V1alpha1ExportTarget**| ExportTarget |


### Return type

**V1alpha1ExportTarget**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putJob**
> V1JobResponse putJob(jobInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiPutJobRequest = {
  // V1JobInput | JobInput
  jobInput: {
    application: "application_example",
    job: "job_example",
    parameters: {},
  },
};

apiInstance.putJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobInput** | **V1JobInput**| JobInput |


### Return type

**V1JobResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


