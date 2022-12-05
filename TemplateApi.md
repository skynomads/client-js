# .TemplateApi

All URIs are relative to *http://cloudplane.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ExportPut**](TemplateApi.md#v1ExportPut) | **PUT** /v1/export | List templates


# **v1ExportPut**
> Array<V1alpha1Template> v1ExportPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TemplateApi(configuration);

let body:any = {};

apiInstance.v1ExportPut(body).then((data:any) => {
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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


