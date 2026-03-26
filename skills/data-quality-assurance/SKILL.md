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

*   **禁止滥用**: 禁止循环内逐行打印（有需要也要及时删除）、全量打印接口返回数据或重复打印相同状态。
*   **格式要求**: 保留的日志必须包含 `[模块名 + 函数名 + 关键上下文 + 核心信息]`。
*   **统一工具**: 必须使用统一封装的日志工具（支持配置过滤），禁止直接使用 `console.log`。

## 3. 代码质量与 Lint

*   **ESLint**: 必须配置 ESLint + TypeScript-ESLint， React 项目必须配置 `eslint-plugin-react-hooks` 插件。
*   **Prettier**: 必须集成 Prettier 保持代码风格统一。

## 4. ESLint 配置示例 (Flat Config)

### React 项目配置 (eslint.config.js)
```javascript
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxRuntime from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  { 
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': jsxRuntime,
      'import': importPlugin,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': ts,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      
      // React Hooks 规则
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // React 规则
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要
      'react/jsx-no-target-blank': 'off', // 安全问题由其他方式处理
      
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      
      // 一般规则
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
];
```

### Vue 项目配置 (eslint.config.js)
```javascript
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'vue': vue,
      'import': importPlugin,
      '@typescript-eslint': ts,
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...vue.configs['vue3-essential'].rules,
      
      // Vue 特定规则
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-components': 'error',
      
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      
      // 一般规则
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
];
```

### package.json 示例
```json
{
  "devDependencies": {
    "eslint": "^9.0.0",
    "@eslint/js": "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "globals": "^15.0.0",
    "prettier": "^3.0.0",
    
    // React 专用
    "eslint-plugin-react": "^7.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.0",
    
    // Vue 专用
    "eslint-plugin-vue": "^9.15.0",
    
    // 通用
    "eslint-import-resolver-typescript": "^3.5.0",
    "eslint-plugin-import": "^2.27.0"
  }
}
```

## 5. 防御性编程

*   接口定义必须清晰。
*   必须显式处理所有的 Loading 和 Error 状态，避免 UI 崩溃。