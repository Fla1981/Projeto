
# Cadastro e Lista de Recados

## Integrantes

- Ricardo Silva Godoi
- Renan Stella Gonçalves
- Caia Braga Castilho

## Tecnologias

- Frontend: React (Create React App)
- Backend: Laravel 13 + Sanctum
- Banco: MySQL 8

## Pré-requisitos

- Node.js v20+
- PHP 8.2+
- Composer 2
- MySQL 8 rodando

## Como rodar o backend

```bash
cd backend
composer install
cp .env.example .env
# Edite o arquivo .env com suas credenciais do MySQL
php artisan key:generate
php artisan migrate
php artisan serve
```

## Como rodar o frontend

```bash
cd frontend
npm install
npm start
```
