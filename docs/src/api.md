# API

## 交互

对 `UniApp` 交互的包装，提供更便捷的调用方式，语法糖🍬

:::tip Tip

强烈建议 `VSCode` 用户安装 [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) 插件，直接输入方法名， 自动引入

:::

### 按需使用

### 提示 `Toast`

#### showToast

> 显示提示框

参数：

- **msg**: 消息内容
- **icon**：图标，默认 none，取值范围（none | success | error | loading）
- **mask**：遮罩，默认 false

返回值：

- `Promise`

使用示例：

```javascript
showToast('消息内容')
showToast('消息内容', 'success', true) 
```

#### showLoading

> 显示加载中

参数：

- **text**：提示文本
- **mask**：遮罩，默认 true

返回值：

- `Promise<any>`

使用示例：

```javascript
showLoading('正在登录...')
```

#### hideLoading

> 隐藏加载动画

参数：

- 无

返回值：

- `void`

使用示例：

```javascript
hideLoading()
```

### 模态框 `Model`

#### showAlert

> 显示弹窗

参数：

- **content**: 提示内容
- **title**: 提示标题，默认“提示”

返回值：

- `Promise<UniApp.ShowModalRes>`

使用示例：

```javascript
showAlert('您的登录已过期，请重新登录～')
showAlert('您的登录已过期，请重新登录～', '温馨提示') 
```

#### showPrompt

> 显示输入框

参数：

- **content**: 提示内容
- **title**: 提示标题，默认“提示”
- **placeholderText**：输入框提示，默认“请输入”

返回值：

- `Promise<UniApp.ShowModalRes>`

使用示例：

```javascript
showPrompt('您的登录已过期，请重新登录～')
    .then((res) => {
        console.log(`您输入了：${res.content}`)
    })
```

## 网络

### 请求 `Request`

实现了拦截器，可根据业务自行修改 `src/utils/request/index.ts`

#### request

发送请求

```typescript
import request from "@/utils/request";

request.request<T = any>(
    options: RequestOptions, 
    config?: Partial<RequestConfig>
): Promise<T>
```

:::tip Tip

request 具有 `get | post | uploadFile` 等便捷写法，参数基本差不多；

就不一一列举了，直接用 `request.get() | request.post()` 即可

:::

参数说明：

- **options**：同 uni.request 的参数选项, 具体参考 [uni.request](https://uniapp.dcloud.net.cn/api/request/request.html)
- **config**：可空，请求配置
  - baseUrl：可空，基础 url，默认 `${import.meta.env.VITE_APP_BASE_URL || ""}/`
  - isReturnDefaultResponse：是否返回默认响应，默认 `false`
  - isTransformResponse：是否对返回数据进行处理，默认 `true`
  - urlPrefix：接口拼接地址，默认空
  - ignoreCancel：忽略重复请求取消，默认 `false`
  - withToken：是否携带 token，默认 `true`
  - isAuth：接口是否需要鉴权，默认 `true`
  - retryCount：重复尝试次数，默认 `2`
  - retryTimeout：重复超时，默认 `300`

示例：

```typescript
import request from "@/utils/request";

/**
 * 获取用户信息
 */
export const apiGetUserInfo = () => {
    return request.request({
        url: "/api/user/get",
        method: 'GET'
    });
};
```

常见问题：

- 暂无

