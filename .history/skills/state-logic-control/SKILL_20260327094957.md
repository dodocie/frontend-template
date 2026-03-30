---
name: state-logic-control
description: 在设计数据流、编写 Store、处理复杂业务流程或表单状态时使用。包含唯一真相原则、状态管理工具规范以及逻辑优化。
---

# State & Logic Control Skill

This skill enforces state management and logic optimization patterns.

## 1. 状态管理与唯一真相 (SSOT)

*   **唯一真相原则**: 所有状态必须有明确的单一来源。禁止在组件内散落 fallback 数据。
*   **状态管理库**:
    *   **Vue**: 必须使用 **Pinia**。
    *   **React**: 优先使用 **Zustand** 或 **Jotai**。

## 2. 复杂流程控制 (State Machine)

*   涉及多步表单、复杂流程切换或大量条件分支时，**必须结合业务需求使用 XState**。
*   严禁在模板或组件中堆砌大量的 `if...else` 或 `switch` 渲染逻辑。

## 3. 逻辑驱动优化 (仅限 React)

*   **事件驱动**: 优先使用事件驱动代替计算属性，减少依赖链。
*   **强制 Memo**:
    *   所有依赖 `state` 或 `props` 的计算属性必须使用 `useMemo`。
    *   组件内的方法必须使用 `useCallback`。

## 4. 单一职责与函数拆分

*   **职责划分**: 大功能模块必须拆解为单一职责小函数，分为三类：
    1.  **数据处理**: 仅转换/校验/格式化，不改模型，不读写文件。
    2.  **模型操作**: 仅负责 Store (Pinia/Zustand等) 的读写和行为触发。
    3.  **文件操作**: 仅负责 IO (读写/上传/下载)。
*   **长度限制**: 单个函数代码严禁超过 **50 行**。
*   **命名规范**: 必须体现具体职责（如 `formatUserFormData`），禁止模糊命名。
