# 📚 Alunos CRUD API - Node.js + MySQL

API RESTful desenvolvida utilizando **Node.js**, **Express**, **Sequelize** e **MySQL** para gerenciamento de alunos e cursos.

O projeto implementa operações completas de CRUD (*Create, Read, Update e Delete*) para entidades acadêmicas, além de disponibilizar documentação interativa utilizando **Swagger/OpenAPI**.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Swagger UI
- Swagger JSDoc
- Nodemon
- dotenv
- CORS

---

# 🏗️ Arquitetura do Projeto

O projeto segue uma estrutura organizada baseada em separação de responsabilidades:

```bash
src/
├── config/
│   └── database.js
│
├── controllers/
│   ├── alunoController.js
│   └── cursoController.js
│
├── models/
│   ├── AlunoRequest.js
│   └── CursoRequest.js
│
├── routes/
│   ├── alunoRoute.js
│   └── cursoRoute.js
│
├── swagger.js
└── index.js
```

---

# 🎯 Funcionalidades

## 👨‍🎓 Alunos

- Cadastro de alunos
- Listagem de alunos
- Busca de aluno por ID
- Atualização de dados do aluno
- Exclusão de aluno

## 📘 Cursos

- Cadastro de cursos
- Listagem de cursos
- Busca de curso por ID
- Atualização de cursos

## 📄 Documentação

- Swagger/OpenAPI integrado
- Endpoints documentados
- Testes de API diretamente pelo navegador

---

# 📦 Dependências Principais

| Pacote | Finalidade |
|---|---|
| express | Servidor HTTP |
| sequelize | ORM para banco de dados |
| mysql2 | Driver MySQL |
| swagger-ui-express | Interface Swagger |
| swagger-jsdoc | Geração da documentação |
| dotenv | Variáveis de ambiente |
| cors | Liberação de acesso externo |
| nodemon | Reload automático em desenvolvimento |

---

# ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js
- MySQL Server
- Git

---

# 🔧 Configuração do Banco de Dados

## Criando o banco

```sql
CREATE DATABASE alunosdb;
```

---

# 🔑 Configuração do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto:

```env
DB_LOCAL_NAME=base
DB_LOCAL_USER=user
DB_LOCAL_PASSWORD=sua_senha
PORT=config
```

---

# 📥 Instalação do Projeto

## Clonar o repositório

```bash
git clone https://github.com/felipefogal/alunos-crud-api-mysql.git
```

---

## Entrar na pasta do projeto

```bash
cd alunos-crud-api-mysql
```

---

## Instalar dependências

```bash
npm install
```

---

# ▶️ Executando a Aplicação

## Ambiente de desenvolvimento

```bash
npm run dev
```

---

## Ambiente padrão

```bash
npm start
```

---

# 🌐 Endpoints da API

## 👨‍🎓 Rotas de Alunos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/aluno` | Lista todos os alunos |
| GET | `/api/aluno/:id` | Busca aluno por ID |
| POST | `/api/aluno` | Cria um aluno |
| PUT | `/api/aluno/:id` | Atualiza um aluno |
| DELETE | `/api/aluno/:id` | Remove um aluno |

---

## 📘 Rotas de Cursos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/curso` | Lista todos os cursos |
| GET | `/api/curso/:id` | Busca curso por ID |
| POST | `/api/curso` | Cria um curso |
| PUT | `/api/curso/:id` | Atualiza um curso |

---

# 📖 Swagger/OpenAPI

Após iniciar o servidor, acesse:

```bash
http://localhost:{porta}/api-docs
```

A interface Swagger permite:

- Visualizar endpoints
- Testar requisições
- Validar payloads
- Consultar documentação da API

---

# ❤️ Health Check

Endpoint utilizado para verificar o funcionamento da API:

```http
GET /api/health
```

## Resposta esperada

```json
{
  "status": "ok"
}
```

---

# 📌 Estrutura da Entidade Aluno

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "endereco": "Rua das Flores, 123",
  "telefone": "(11) 99999-9999",
  "documento": "123.456.789-00",
  "rm": "12345",
  "turma": "3DS",
  "turno": "Noturno",
  "cursoId": 1
}
```

---

# 📌 Estrutura da Entidade Curso

```json
{
  "nomeCurso": "Desenvolvimento de Sistemas",
  "descricaoCurso": "Curso técnico voltado para programação",
  "areaCurso": "Tecnologia",
  "periodoCurso": "Noturno",
  "flagAtivoCurso": true
}
```

---

# 🧠 Conceitos Aplicados

- APIs RESTful
- Arquitetura MVC
- ORM com Sequelize
- Relacionamento com banco MySQL
- Estrutura modular
- Middleware Express
- Documentação com Swagger
- Variáveis de ambiente
- Integração backend com banco relacional

---

# 🔮 Melhorias Futuras

- Autenticação JWT
- Relacionamentos Sequelize (`belongsTo`, `hasMany`)
- Validações avançadas
- Testes automatizados
- Docker
- Deploy em nuvem
- Paginação
- Filtros de busca
- Logs estruturados
- CI/CD

---

# 👨‍💻 Autor

Desenvolvido por **Felipe Garcia Fogal**

- GitHub: https://github.com/felipefogal

---

# 📄 Licença

Este projeto está sob a licença MIT.

---

# ⭐ Objetivo do Projeto

Projeto desenvolvido para fins de estudo e prática de desenvolvimento backend utilizando Node.js, Express, Sequelize e MySQL, servindo também como projeto de portfólio.