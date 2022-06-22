### Inicializa o projeto criando o package.json
```bash
$ npm init -y
```

### instala o typescript em modo dev
```bash
$ npm i typescript --save-dev
```

### cria o manifesto (arquivo de configuração) tsconfig.json do typescript 
```bash
$ npx tsc --init
```

### instala o jest e ts-node para testes
```bash
$ npm i jest @types/jest --save-dev
```

### cria o manifesto (arquivo de configuração) jest.config.ts do jest
```bash
$ npx jest --init
```

### Instalar o swc, ferramenta da vercel que compila typescript para javascript
```bash
$ npm i @swc/jest @swc/core --save-dev

### Alterar o arquivo jest.config.ts
 linha 176:
   transform: {
     "^.+\\.ts?$": ["@swc/jest"],
   },
```

### Instala o Framework Express
```bash
$ npm i express --save
```

### Instala a tipagem do Express
```bash
$ npm i @types/express --save-dev
```

NESTJS

### Instalar NestJs
```bash
$ npm i -g @nestjs/cli
```

### Criar projeto
```bash
$ nest new project-name
```

### Executar o projeto
```bash
$ npm run start:dev
```

### Gera artefatos nest
```bash
$ nest generate [artefact] [name]
```

```bash
$ nest g resource routes
```

### Instalar SQLite + TypeORM
```bash
$ npm i sqlite3 typeorm @nestjs/typeorm --save
```
