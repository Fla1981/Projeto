\# Cadastro e Lista de Recados



Sistema web para cadastro de usuários e gerenciamento de recados pessoais.



\## Integrantes



\- Ricardo Silva Godoi

\- Renan Stella Gonçalves

\- Caia Braga Castilho



\## Tecnologias



\- Frontend: React (Create React App)

\- Backend: Laravel 13 + Sanctum

\- Banco: MySQL 8



\## Pré-requisitos



\- Node.js v20+

\- PHP 8.2+

\- Composer 2

\- MySQL 8 rodando



\## Como rodar o backend



```bash

cd backend

composer install

cp .env.example .env

\# Edite o arquivo .env com suas credenciais do MySQL

php artisan key:generate

php artisan migrate

php artisan serve

```



\## Como rodar o frontend



```bash

cd frontend

npm install

npm start

```



\## Funcionalidades



\- Cadastro de usuários

\- Login

\- Logout

\- Autenticação com Laravel Sanctum

\- Cadastro de recados

\- Listagem de recados

\- Exclusão de recados



\## Estrutura do Projeto



```text

Projeto/

│

├── backend/

├── frontend/

└── README.md

```

