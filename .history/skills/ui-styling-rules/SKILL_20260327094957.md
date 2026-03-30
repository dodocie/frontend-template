---
name: ui-styling-rules
description: 编写组件、设计页面布局或定制全局主题时使用。包含 Tailwind CSS 规范、组件库选择策略以及 DOM 操作禁令。
---

# UI & Styling Skill

This skill enforces UI development rules and styling conventions.

## 1. 样式规范

*   **必须使用 Tailwind CSS**。
*   优先寻找现有组件库，仅在无法满足需求时才手写 CSS。

## 2. 组件库优先策略

*   **Vue**: PC端使用 **Element Plus**，移动端使用 **Vant UI**。
*   **React**: 优先使用 **Mantine** (全平台)，或使用 **Radix UI** + **Shadcn/UI**。

## 3. 全局主题与配置中心化

*   Tailwind 变量（颜色、间距等）必须在 `tailwind.config.js` 中定义。
*   组件库的主题（如 MantineProvider 或 Element Plus CSS Variables）必须统一通过全局配置文件管理。

## 4. 声明式渲染与 DOM 限制

*   **严禁**使用原生 JavaScript 直接操作 DOM。
*   必须完全依赖框架的响应式系统（Vue 的响应式系统或 React 的 State）。

## 5. 模块化思维

*   优先考虑逻辑抽离（Vue Hooks / React Hooks）以及组件复用。
