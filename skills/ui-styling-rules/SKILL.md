---
name: ui-styling-rules
description: 编写组件、设计页面布局或定制全局主题时使用。包含 Tailwind CSS 规范、组件库选择策略以及 DOM 操作禁令。
---

# UI & Styling Skill

This skill enforces UI development rules and styling conventions.

## 1. 样式规范

*   **必须使用 Tailwind CSS最新版**。
*   优先寻找现有组件库，仅在无法满足需求时才手写 CSS。

## 2. 组件库优先策略

*   **Vue**: PC端使用 **Element Plus**，移动端使用 **Vant UI**。
*   **React**: 优先使用 **Mantine** (全平台)，或使用 **Radix UI** + **Shadcn/UI**。

## 3. 全局主题与配置中心化

*   Tailwind 变量（颜色、间距、字号等）必须在 `global.css` 文件的`@theme` 中定义。
*   组件库的主题（如 MantineProvider 或 Element Plus CSS Variables）必须统一通过全局配置文件管理。
*   **流式排版系统 (Fluid Typography)**: 使用CSS clamp()函数实现响应式字号
    ```css
    /* ========================================= 
          流式排版系统 (Fluid Typography) 
          公式：clamp(最小字号, 基础字号 + 动态系数, 最大字号) 
       ========================================= */ 
   
   
       /* ⬇️ 辅助文本与正文 (安全区，使用 vw 保证阅读舒适度) */ 
       --text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem);    /* 12px -> 13px */ 
       --text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);        /* 14px -> 16px */ 
       --text-base: clamp(1rem, 0.95rem + 0.4vw, 1.125rem);     /* 16px -> 18px */ 
   
   
       /* ⬇️ 标题与巨型字 (危险区，使用 vmin 保护垂直高度) */ 
       --text-lg: clamp(1.125rem, 1rem + 1.5vmin, 1.5rem);      /* 18px -> 24px */ 
       --text-xl: clamp(1.25rem, 1rem + 3vmin, 2.25rem);        /* 20px -> 36px */ 
       --text-2xl: clamp(1.5rem, 1.25rem + 5vmin, 3rem);        /* 24px -> 48px */ 
   
   
       /* ========================================= 
          间距系统也可以同理设置 
       ========================================= */ 
       --spacing-4: clamp(0.75rem, 0.5rem + 1vw, 1rem);         /* 小间距用 vw */ 
       --spacing-8: clamp(1.5rem, 1rem + 3vmin, 2.5rem);        /* 大留白用 vmin 防止屏幕太扁时大片空白 */
    ```

## 4. 字号规范与排版系统

*   **字号层级**: 建立清晰的字号层级体系，例如：
    *   `text-xs` (12px) - 辅助文本、标签
    *   `text-sm` (14px) - 次要信息、注释
    *   `text-base` (16px) - 正文内容（默认）
    *   `text-lg` (18px) - 次要标题、摘要
    *   `text-xl` (20px) - 小标题
    *   `text-2xl` (24px) - 主标题
    *   `text-3xl` (30px) - 大标题
    *   `text-4xl` (36px) - 页面标题
    *   更大的字号用于特殊展示区域

*   **响应式字号**: 使用 Tailwind 的响应式前缀适配不同屏幕尺寸
    *   移动端: 基础字号 `text-base`，标题适当缩小
    *   桌面端: 基础字号 `text-base` 或 `text-lg`，标题适当放大

*   **行高与字间距**: 
    *   正文内容: `leading-relaxed` 或 `leading-6` (24px行高)
    *   标题: `leading-tight` 或 `leading-6`
    *   长段落: 适当增加字间距 `tracking-wide`

*   **一致性原则**: 
    *   相似类型的文本应使用相同的字号类
    *   避免随意使用自定义字号，优先使用配置好的字号系统
    *   维护一份设计系统的字号规范文档

## 5. 声明式渲染与 DOM 限制

*   **严禁**使用原生 JavaScript 直接操作 DOM。
*   必须完全依赖框架的响应式系统（Vue 的响应式系统或 React 的 State）。

## 6. 模块化思维

*   优先考虑逻辑抽回（Vue Hooks / React Hooks）以及组件复用。