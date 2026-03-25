---
name: architecture-foundation
description: 项目初始化、路由配置、环境排查或创建新模块时使用。包含技术栈约束（Vue/React）、环境上下文以及基础架构规则。
---

# Architecture Foundation Skill

This skill enforces the core architectural and environmental standards for the project.

## 1. 技术栈约束 (Tech Stack)

*   **运行环境**: Node.js v20+。
*   **类型系统**: 必须全面使用 **TypeScript (Strict 模式)**，严禁滥用 `any`。
*   **前端框架**:
    *   **Vue 3**: 必须使用 `Composition API` + `<script setup lang="ts">`。
    *   **React**: 必须使用 `Functional Components` + `Hooks` + `TypeScript`。

## 2. 路由准则 (Routing)

*   **合规工具**: 必须使用官方路由库（Vue 使用 `vue-router`，React 使用 `react-router-dom`）。
*   **禁止行为**: 严禁使用响应式变量（如 `v-if="page === 'home'"`）手动模拟页面跳转。

## 3. 外链资源引用规范

*   **禁止行为**: 严禁在 CSS/SCSS 中通过 `@import url()` 引入外链资源（如字体、样式文件）。
*   **合规加载方式**:
    1.  将外链资源下载到本地后引入。
    2.  使用非阻塞 `<link>` 在 HTML 中引入。

## 4. 环境上下文

*   开发环境适配 vconsole。
*   需适配测试服务器部署链路。
