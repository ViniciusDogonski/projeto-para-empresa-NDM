# Cadastro de times de e-sports

(projeto para a empresa NDM)

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

node js
postgres

### 🔧 Instalação

back-end:

```
entre na pasta back "cd back"
```
```
instale os pacotes de dependerncia (yarn install)
```

front-end:

```
entre na pasta front/web-esports "cd front/web-esports"
```
```
instale os pacotes de dependerncia (npm install)
```

## 📦 Implantação

configure o arquivo .env.example com suas credenciais do banco

Exemplo:
```
DATABASE_URL="postgresql://hostname:password@host:port/ndm?schema=sample"
```
(tire o .example do nome do arquivo)

para rodar o servidor use o comando:

```
yarn dev
```
para rodar o front use o comando:

```
npm start
```

## 🛠️ Construído com

ferramentas usadas para criar seu projeto

* node
* react
* postgres
* express 
* cors
* bootstrap