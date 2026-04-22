# Documentação da API

https://documenter.getpostman.com/view/52849259/2sBXqFNNon


# 🚀 API CRUD Message

API REST desenvolvida com **Node.js**, **Express** e **PostgreSQL**, com o objetivo de demonstrar na prática a construção de um backend completo com autenticação, autorização e validação de dados.

---

## 📌 Sobre o projeto

Esta API implementa um sistema completo de:

* 🔐 Autenticação com JWT
* 🔑 Senhas seguras com bcrypt
* 📝 CRUD completo de postagens
* 🔗 Relacionamento entre usuários e posts
* ✅ Validação de dados com Joi

A proposta é servir como base de aprendizado para iniciantes, evoluindo passo a passo até um padrão mais próximo do mercado.

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* PostgreSQL
* JWT (JSON Web Token)
* bcrypt
* Joi

---

## 🔐 Autenticação

A autenticação é feita via **JWT (JSON Web Token)**.

Após realizar login, você receberá um token que deve ser enviado no header das requisições protegidas:

```http
Authorization: Bearer {token}
```

---

## 📂 Endpoints

### 👤 Usuários

#### 🔍 Buscar usuários

```http
GET /users
```

---

#### 📝 Cadastro de usuários

```http
POST /users/register
```

**Body:**

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

---

#### 🔐 Login de usuários

```http
POST /users/login
```

**Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

---

### 📝 Postagens

#### 🔍 Buscar postagem

```http
GET /posts
```

---

#### ➕ Criar postagem

```http
POST /posts
```

**Body:**

```json
{
  "title": "string",
  "content": "string"
}
```

---

#### ✏️ Atualizar postagem

```http
PUT /posts/{id}
```

---

#### ❌ Apagar postagem

```http
DELETE /posts/{id}
```

---

## ⚠️ Códigos de resposta

| Código | Descrição                |
| ------ | ------------------------ |
| 200    | OK                       |
| 201    | Criado com sucesso       |
| 400    | Requisição inválida      |
| 401    | Não autorizado           |
| 404    | Não encontrado           |
| 500    | Erro interno do servidor |

---

## ▶️ Como executar o projeto

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Entrar na pasta
cd seu-repo

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev
```

---

## 🧪 Testes da API

A documentação completa e interativa pode ser acessada via Postman:

👉 https://documenter.getpostman.com/view/52849259/2sBXqFNNon

---

## 🎯 Objetivo

Este projeto foi desenvolvido com foco educacional, permitindo entender conceitos fundamentais como:

* Estruturação de APIs REST
* Autenticação e autorização
* Boas práticas de backend
* Integração com banco de dados relacional

---

## 📜 Licença

Este projeto está sob a licença MIT.
