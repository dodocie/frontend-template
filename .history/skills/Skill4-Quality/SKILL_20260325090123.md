---
name: data-quality-assurance
description: 对接接口、编写 Mock 数据、调试日志或进行代码质量检查时使用。包含数据中心化原则、Lint 规范及防御性编程要求。
---

# Data & Quality Assurance Skill

This skill enforces data handling, code quality, and debugging standards.

## 1. Mock 数据中心化

*   **集中存放**: 所有 Mock 数据必须存放在 `src/mocks/` 或 `src/api/mock/` 目录下，并统一导出。
*   **禁止硬编码**: 严禁在组件内散落 `fallback` 数据。禁止在函数内硬编码常量补全测试数据，数据缺失应直接抛出异常。

## 2. 日志打印规范

*   **禁止滥用**: 禁止循环内逐行打印、全量打印接口返回数据或重复打印相同状态。
*   **格式要求**: 保留的日志必须包含 `[模块名 + 函数名 + 关键上下文 + 核心信息]`。
*   **统一工具**: 必须使用统一封装的日志工具（支持配置过滤），禁止直接使用 `console.log`。

## 3. 代码质量与 Lint

*   **ESLint**: 必须配置 ESLint + TypeScript-ESLint。
*   **Prettier**: 必须集成 Prettier 保持代码风格统一。

## 4. 防御性编程

*   接口定义必须清晰。
*   必须显式处理所有的 Loading 和 Error 状态，避免 UI 崩溃。
