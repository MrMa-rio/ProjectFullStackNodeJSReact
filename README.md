<h1 align="center" style="padding-left:10px;">  ProjectFullStackNodeJSReact – Mario Alberto</h1>

<h2 align="center">Desenvolvimento de uma API em NodeJS com Typescript.</h2>
<p>O intuito dessa API é administrar um fluxo simples de um restaurante.</p>
<div style="padding-left:10px;">
    <h3>Ela contará com:</h3>
    
        Controle de Cliente - CRU (Optei por não deletar o cliente) ✔️ 
        Controle de Usuário - CRUD ✔️
        Controle de Pedidos e Itens do Pedido ✔️ 
        Sistema de Autenticação JWT - (Login, geração e validação de Token) ✔️
</div>


### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[NODEJS](https://nodejs.org/en/download/current), [MySql](https://www.mysql.com).

### 🎲 Rodando a API

```bash
# Clone este repositório
$ git clone https://github.com/MrMa-rio/ProjectFullStackNodeJSReact.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ProjectFullStackNodeJSReact

# Acesse o arquivo por algum editor
$ code . (VSCode).

# Copie o arquivo .env example, altere seu nome para .env e altere somente os dados do banco de dados referente ao que você irá utilizar.

# Adicione as dependências utilizando o seu Gerenciador de pacotes (o meu é o NPM)
$ npm install

# Disponibilizarei a estrutura do banco para simplificar o processo (dumpDB.sql), porem caso queira usar um de sua escolha, siga o proximo passo

#Presumindo que voce saiba fazer toda estrutura de conexão com o seu banco alternativo, crie a classe espelhada na interface DBGeneric e ligue na classe principal "DB", o resto deverá se comportar normalmente.


#Execute a aplicação atraves do comando
$ tsnd --rs src/server.ts

# O servidor iniciará na porta:3001 - acesse <localhost:3001/documentation>

# Login de acesso a API:
# {
#   "nome": "usuario_teste",
#   "senha": "aa123456"
# }

# O token gerado deve ser inserido no Bearer
```
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Mysql](https://www.mysql.com)
- [NODEJS](https://nodejs.org/en/)
- [TYPESCRIPT](https://www.typescriptlang.org/docs/)
- [JWT](https://jwt-auth.readthedocs.io/en/develop/)

<h2 align="center">>Feito por Mario Alberto 👋🏽</h2>

MIT License

Copyright (c) <2022> Miguel Moscardini Battarra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


