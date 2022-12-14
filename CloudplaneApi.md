# .CloudplaneApi

All URIs are relative to *http://cloudplane.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ApplicationGet**](CloudplaneApi.md#v1ApplicationGet) | **GET** /v1/application | List applications
[**v1ApplicationNameDelete**](CloudplaneApi.md#v1ApplicationNameDelete) | **DELETE** /v1/application/{name} | Delete application
[**v1ApplicationNameGet**](CloudplaneApi.md#v1ApplicationNameGet) | **GET** /v1/application/{name} | Get application
[**v1ApplicationPut**](CloudplaneApi.md#v1ApplicationPut) | **PUT** /v1/application | Put application.
[**v1ExportGet**](CloudplaneApi.md#v1ExportGet) | **GET** /v1/export | List exports
[**v1ExportNameGet**](CloudplaneApi.md#v1ExportNameGet) | **GET** /v1/export/{name} | Get export
[**v1ExportPut**](CloudplaneApi.md#v1ExportPut) | **PUT** /v1/export | Put export
[**v1ExportTargetGet**](CloudplaneApi.md#v1ExportTargetGet) | **GET** /v1/export/target | List export targets
[**v1ExportTargetNameGet**](CloudplaneApi.md#v1ExportTargetNameGet) | **GET** /v1/export/target/{name} | Get export target
[**v1ExportTargetPut**](CloudplaneApi.md#v1ExportTargetPut) | **PUT** /v1/export/target | Put export target
[**v1ExportscheduleGet**](CloudplaneApi.md#v1ExportscheduleGet) | **GET** /v1/exportschedule | List export schedules
[**v1ExportscheduleNameDelete**](CloudplaneApi.md#v1ExportscheduleNameDelete) | **DELETE** /v1/exportschedule/{name} | Delete export schedule
[**v1ExportscheduleNameGet**](CloudplaneApi.md#v1ExportscheduleNameGet) | **GET** /v1/exportschedule/{name} | Get export schedule
[**v1ExportschedulePut**](CloudplaneApi.md#v1ExportschedulePut) | **PUT** /v1/exportschedule | Put export schedule
[**v1JobPut**](CloudplaneApi.md#v1JobPut) | **PUT** /v1/job | Put job
[**v1TemplateGet**](CloudplaneApi.md#v1TemplateGet) | **GET** /v1/template | List templates


# **v1ApplicationGet**
> Array<V1alpha1Application> v1ApplicationGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.v1ApplicationGet(body).then((data:any) => {
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

# **v1ApplicationNameDelete**
> string v1ApplicationNameDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ApplicationNameDeleteRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.v1ApplicationNameDelete(body).then((data:any) => {
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

# **v1ApplicationNameGet**
> V1alpha1Application v1ApplicationNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ApplicationNameGetRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.v1ApplicationNameGet(body).then((data:any) => {
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

# **v1ApplicationPut**
> V1alpha1Application v1ApplicationPut(application)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ApplicationPutRequest = {
  // V1alpha1Application | ExportTarget
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
          format: "format_example",
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

apiInstance.v1ApplicationPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application** | **V1alpha1Application**| ExportTarget |


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
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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

# **v1ExportscheduleGet**
> Array<V1alpha1ExportSchedule> v1ExportscheduleGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:any = {};

apiInstance.v1ExportscheduleGet(body).then((data:any) => {
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

# **v1ExportscheduleNameDelete**
> string v1ExportscheduleNameDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportscheduleNameDeleteRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.v1ExportscheduleNameDelete(body).then((data:any) => {
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

# **v1ExportscheduleNameGet**
> V1alpha1ExportSchedule v1ExportscheduleNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportscheduleNameGetRequest = {
  // string | Name
  name: "name_example",
};

apiInstance.v1ExportscheduleNameGet(body).then((data:any) => {
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

# **v1ExportschedulePut**
> V1alpha1ExportSchedule v1ExportschedulePut(schedule)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CloudplaneApi(configuration);

let body:.CloudplaneApiV1ExportschedulePutRequest = {
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

apiInstance.v1ExportschedulePut(body).then((data:any) => {
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

# **v1JobPut**
> MainJobResponse v1JobPut(jobInput)


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

**MainJobResponse**

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


