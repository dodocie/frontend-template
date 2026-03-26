---
name: frontend-security
description: 处理用户输入、数据传输或权限验证时使用。包含XSS防护、CSRF防护、敏感信息处理等规范。
---

# Frontend Security Skill

This skill enforces security best practices in frontend applications.

## 1. XSS 防护

*   **输入过滤**: 所有用户输入必须经过适当的过滤和转义。
*   **HTML 插入**: 禁止直接插入未经验证的HTML内容。

## 2. 数据安全

*   **敏感信息**: 严禁在前端存储敏感信息如密码、密钥等。
*   **数据加密**: 敏感数据传输必须使用HTTPS。

## 3. 权限控制

*   **前端权限**: 必须实现前端权限验证，但不能替代后端验证。
*   **访问控制**: 不同角色的用户界面应正确显示。