---
name: engineering-workflow-docs
description: 开启新需求、规划复杂模块或编写自动化脚本时使用。包含文档驱动开发原则、脚本化思维以及自说明代码规范。
---

# Engineering Workflow & Docs Skill

This skill enforces project documentation, planning, and automation workflows.

## 1. 文档驱动 (Docs First)

*   **修改前必读**: 开展新需求或修改代码前，必须查阅 `docs/` 目录。
*   **同步更新**: 需求变更后必须同步更新原文档，**严禁**创建带有 `v2`, `new` 等后缀的重复文档，直接覆盖更新即可。

## 2. Plan 计划文档

*   复杂功能开发前，必须在 `docs/plans/` 目录下建立 `.md` 计划。
*   任务必须使用 `[ ]` 列表拆解，**每完成一个子项必须更新为 `[x]`**，保持进度透明。

## 3. 操作脚本化 (Scripts)

*   **标准构建**: 使用框架默认命令（如 `npm run dev/build`），无需额外脚本。
*   **复杂构建场景**: 当需要预处理、多步骤构建、环境差异化处理时，必须编写 Node.js 或 Shell 脚本，统一放入 `scripts/` 目录。
*   **重复性任务**: 如部署、数据清洗、批量处理、复杂 Lint 检查等，也应编写脚本。
*   **调用方式**: 通过 `npm run <script>` 形式调用。
*   **环境感知**: 脚本需考虑测试服务器与本地环境的路径映射或环境变量切换。

## 4. 自说明代码 (Self-Explanatory)

*   变量和函数名必须具备高度的语义化。
*   复杂逻辑必须附带 TypeScript 类型注释或详尽的 JSDoc。