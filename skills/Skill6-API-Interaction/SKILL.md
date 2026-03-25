---
name: api-data-interaction
description: 处理接口请求、数据转换、错误处理或缓存策略时使用。包含请求封装、错误处理、数据验证等规范。
---

# API & Data Interaction Skill

This skill enforces API integration and data interaction patterns.

## 1. 请求封装规范

*   **统一请求库**: 必须使用统一的请求封装，建议使用h5原生fetch API。
*   **拦截器**: 必须配置请求和响应拦截器，处理认证、错误提示等。

## 2. 错误处理策略

*   **统一错误处理**: 必须有统一的错误处理机制，区分网络错误、业务错误、权限错误等。
*   **错误边界**: React 应用必须使用 Error Boundary，Vue 应用必须配置全局错误处理器。

## 3. 数据验证

*   **客户端验证**: 必须对所有用户输入和外部数据进行验证。
*   **Type Safety**: 建议在关键边界（第三方API响应、用户输入）使用 Zod 或类似库进行运行时类型验证。

## 4. 缓存与优化

*   **请求去重**: 使用Pinia Colada（vite+Vue+pinia项目）、React Query（React项目）等服务端状态管理库避免重复请求相同数据。
*   **缓存策略**: 合理配置 staleTime 和 gcTime，避免缓存过期或过早回收。
*   **响应式数据流**: 结合框架特性（Vue 的响应式系统或 React 的状态管理）处理异步数据流。
