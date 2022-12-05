# .CloudplaneApi

All URIs are relative to *http://cloudplane.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ExportGet**](CloudplaneApi.md#v1ExportGet) | **GET** /v1/export | List exports
[**v1ExportNameGet**](CloudplaneApi.md#v1ExportNameGet) | **GET** /v1/export/{name} | Get export
[**v1ExportPut**](CloudplaneApi.md#v1ExportPut) | **PUT** /v1/export | Put export
[**v1ExportTargetGet**](CloudplaneApi.md#v1ExportTargetGet) | **GET** /v1/export/target | List export targets
[**v1ExportTargetNameGet**](CloudplaneApi.md#v1ExportTargetNameGet) | **GET** /v1/export/target/{name} | Get export target
[**v1ExportTargetPut**](CloudplaneApi.md#v1ExportTargetPut) | **PUT** /v1/export/target | Put export target
[**v1JobPut**](CloudplaneApi.md#v1JobPut) | **PUT** /v1/job | Put job
[**v1TemplateGet**](CloudplaneApi.md#v1TemplateGet) | **GET** /v1/template | List templates


# **v1ExportGet**
> Array<V1alpha1Export> v1ExportGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.v1ExportGet(body).then((data:any) => {
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

# **v1ExportNameGet**
> V1alpha1Export v1ExportNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportNameGetRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.v1ExportNameGet(body).then((data:any) => {
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

# **v1ExportPut**
> V1alpha1Export v1ExportPut(_export)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportPutRequest = {
  // V1alpha1Export | Export
  _export: {
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
      application: "application_example",
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
    },
  },
};

apiInstance.v1ExportPut(body).then((data:any) => {
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

# **v1ExportTargetGet**
> Array<V1alpha1ExportTarget> v1ExportTargetGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.v1ExportTargetGet(body).then((data:any) => {
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

# **v1ExportTargetNameGet**
> V1alpha1ExportTarget v1ExportTargetNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportTargetNameGetRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.v1ExportTargetNameGet(body).then((data:any) => {
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

# **v1ExportTargetPut**
> V1alpha1ExportTarget v1ExportTargetPut(exportTarget)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportTargetPutRequest = {
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

apiInstance.v1ExportTargetPut(body).then((data:any) => {
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

# **v1JobPut**
> V1Job v1JobPut(jobInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1JobPutRequest = {
  // MainJobInput | JobInput
  jobInput: {
    application: "application_example",
    job: "job_example",
    parameters: {},
  },
};

apiInstance.v1JobPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobInput** | **MainJobInput**| JobInput |


### Return type

**V1Job**

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

# **v1TemplateGet**
> Array<V1alpha1Template> v1TemplateGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.v1TemplateGet(body).then((data:any) => {
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


