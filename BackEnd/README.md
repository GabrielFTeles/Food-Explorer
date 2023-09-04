# 🍔 Food Explorer API

A **API Restful FoodExplorer** foi projetado para ser uma ponte entre o Front-End e o Back-End do restaurante virtual fictício **Food Explorer**. Ao consumir essa API, o projeto será capaz de criar, listar, atualizar e deletar informações sobre usuários, pratos e favoritos, proporcionando aos usuários uma experiência completa e rica em recursos.

## Índice

- [📌 Introdução](#-introdução)
- [🗄️ Esquema do Banco de Dados](#%EF%B8%8F-esquema-do-banco-de-dados)
- [💡 Tecnologias](#-tecnologias)
- [🛠️ Instalação](#%EF%B8%8F-instalação)
- [🌐 Endpoints](#-endpoints)
- [🤝 Contribuições](#-contribuições)
- [📄 Licença](#-licença)
## 📌 Introdução

Essa API foi desenvolvida utilizando Node.js e oferece endpoints que abrangem diferentes aspectos do projeto **Food Explorer**, incluindo usuários, pratos e favoritos.

## Recursos Principais

Aqui estão alguns dos principais recursos da **API Food Explorer**:

### Gerenciamento de Usuários

- **Criação de Conta de Usuário:** Permite que os usuários criem uma nova conta, fornecendo informações básicas como nome, e-mail e senha.

### Gerenciamento de Pratos

- **Listagem de Pratos:** Fornece uma lista de pratos disponíveis no cardápio.

- **Criação de Novos Pratos:** Permite que os administradores do restaurante adicionem novos pratos ao cardápio, incluindo nome, descrição, categoria, imagem e preço.

- **Atualização de Pratos:** Permite que os administradores atualizem as informações de pratos existentes.

- **Deleção de Pratos:** Permite que os administradores removam pratos do cardápio.

### Gerenciamento de Favoritos

- **Criação de Favoritos:** Permite que os usuários marquem pratos como favoritos para acesso rápido.

- **Deleção de Favoritos:** Permite que os usuários removam pratos da lista de favoritos.

## Como Utilizar a API

A API Restful FoodExplorer segue os princípios da arquitetura REST e utiliza endpoints HTTP para interações. Para utilizar os recursos oferecidos pela API, siga as orientações presentes em cada seção correspondente na documentação.

Lembrando que a API do Food Explorer é projetada para trabalhar em conjunto com o Front-End principal do restaurante virtual. Certifique-se de seguir as instruções de autenticação e integração presentes na documentação.

Explore a documentação para obter detalhes sobre cada rota e recurso, e sinta-se à vontade para contribuir, fornecer feedback ou fazer perguntas conforme trabalhamos juntos para criar uma experiência gastronômica excepcional com o projeto FoodExplorer!

## Mais Recursos

- **Cardápio Digital Personalizado:** Oferece cardápio digital com uma variedade de pratos, cada um com descrição, preço e imagem.

- **Autenticação Segura:** Utilizamos tokens JWT para garantir a autenticação segura entre o front-end e a API.

- **Experiência Intuitiva:** A API é projetada para ser fácil de integrar e oferecer uma experiência de usuário fluida.

Por favor, siga em frente e explore a documentação para obter mais detalhes sobre como a API funciona e como você pode utilizar a API.

## 🗄️ Esquema do Banco de Dados

Aqui está o esquema do banco de dados da API, visualizado através do [DrawSQL](https://drawsql.app/teams/gabriels-team-9/diagrams/food-explorer):

![Esquema do Banco de Dados](https://cdn.discordapp.com/attachments/841898960737402883/1147539308207689850/image.png)
## 💡 Tecnologias
A **API Food Explorer** é desenvolvida utilizando as seguintes tecnologias e bibliotecas:

- **bcryptjs**: Biblioteca para hashing de senhas.
- **cors**: Middleware para lidar com políticas de mesmo domínio (CORS).
- **dotenv** : Carrega variáveis de ambiente de um arquivo `.env`.
- **express** : Framework web para criar APIs e aplicativos web.
- **express-async-errors**: Tratamento assíncrono de erros no Express.
- **jsonwebtoken**: Biblioteca para geração de tokens JWT (JSON Web Tokens).
- **knex**: Construtor de consultas SQL para Node.js.
- **multer**: Middleware para upload de arquivos.
- **pm2**: Gerenciador de processos para aplicativos Node.js.
- **sqlite3**: Driver para SQLite, um sistema de gerenciamento de banco de dados.

Essas tecnologias foram escolhidas para garantir uma base sólida e eficiente, abrangendo desde o gerenciamento de bancos de dados até a segurança e o tratamento de requisições HTTP.


## 🛠️ Instalação

Siga os passos abaixo para instalar e configurar a API em um ambiente local:

1. 📥 **Clone o repositório:**

    ```bash
    git clone https://github.com/GabrielFTeles/Food-Explorer.git
    ```

2. 📂 **Navegue para o diretório do projeto:**

    ```bash
    cd ./Food-Explorer/BackEnd
    ```

3. 📦 **Instale as dependências:**

    ```bash
    npm install
    ```

4. ⚙️ **Crie um arquivo de configuração:**

    Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Por exemplo:

    ```dotenv
    AUTH_SECRET=segredo_do_token
    PORT=porta
    ```

    Certifique-se de substituir `segredo_do_token` pelo segredo que você deseja usar no token da sua API e `porta` pela porta que deseja usar.

5. ▶️ **Inicie o servidor:**

    ```bash
    npm start
    ```

    Isso iniciará o servidor da API na porta especificada no arquivo .env.

6.  🌐 **Acesse a API:**

    Abra o navegador ou utilize uma ferramenta como o [Insomnia](https://insomnia.rest/) para acessar os endpoints da API em http://localhost:3000 (substitua a porta conforme necessário).

    Agora a API está instalada, configurada e em execução no seu ambiente local. Você pode começar a usá-la para testes e desenvolvimento.
    
## 🌐 Endpoints
Aqui estão os endpoints disponíveis na API, organizados por categorias:

## Usuários 👨‍🦰

#### **Criação de usuário:**
-  **Método:** POST
-  **Endpoint:** `/users`
-  **Parâmetros de Corpo da Solicitação:** 
    ```json 
    {
      "name": "Nome do usuário",
      "email": "E-mail do usuário"
      "password": "Senha do usuário"
    }
    ```
- **Resposta:**
    ```http
    Status: 201 Created
    ```
&nbsp;

## Seções 👮‍♂️

#### **Iniciar seção:**
-  **Método:** POST
-  **Endpoint:** `/sessions`
-  **Parâmetros de Corpo da Solicitação:** 
    ```json 
    {
      "email": "E-mail do usuário",
      "password": "Senha do usuário"
    }
    ```
- **Resposta:**
    ```http
    Status: 200 Ok

    {
      "user": {
        "name": "User"
      },
      "token": "token_válido"
    }
    ```
&nbsp;

## Pratos 🍳

#### **Criação de prato (Apenas administradores):**
-  **Método:** POST
-  **Endpoint:** `/dishes`
-  **Requer Permissões:** Usuário autenticado (Bearer Token) e administrador.
-  **Parâmetros de Corpo da Solicitação:** 
    ```json 
    {
      "name": "Nome do Prato",
      "description": "Descrição do prato",
      "category": "category",
      "price": 21.89,
      "ingredients": ["Ingrediente 1", "Ingrediente 2"]
    }
    ```
- **Resposta:**
    ```http
    Status: 201 Created

    {
      "message": "Prato criado com sucesso.",
      "dish_id": 1,
    }
    ```
&nbsp;

#### **Atualização de prato  (Apenas administradores):**
-  **Método:** PUT
-  **Endpoint:** `/dishes/{id}`
-  **Parâmetros de Rota:** `id`
-  **Requer Permissões:** Usuário autenticado (Bearer Token) e administrador.
-  **Parâmetros de Corpo da Solicitação:** 
    ```json 
    {
      "name": "Nome do Prato",
      "description": "Descrição do prato",
      "category": "category",
      "price": 49.99,
      "ingredients": ["Ingrediente 1", "Ingrediente 2"]
    }
    ```
- **Resposta:**
    ```http
    Status: 200 Ok

    {
      "message": "Prato atualizado com sucesso.",
      "dish_id": 1,
    }
    ```
&nbsp;

#### **Listagem de pratos:**
-  **Método:** GET
-  **Endpoint:** `/dishes`
-  **Parâmetros de consulta:** `?searchText=valor`
-  **Requer Permissões:** Usuário autenticado (Bearer Token).
-  **Resposta:**
    ```http
    Status: 200 Ok

    [
      {
        "id": 1,
        "name": "Prato 1",
        "description": "Descrição do prato",
        "category": "meal",
        "image": "prato_1.png",
        "price": 99.99,
        "ingredients": ["Ingrediente 1", "Ingrediente 2"]
      },
      {
        "id": 2,
        "name": "Prato 2",
        "description": "Descrição do prato",
        "category": "drink",
        "image": "prato_2.png",
        "price": 89.99,
        "ingredients": ["Ingrediente 1", "Ingrediente 2"]
      }
    ]
    ```
&nbsp;

#### **Listagem de prato específico:**
-  **Método:** GET
-  **Endpoint:** `/dishes/{id}`
-  **Parâmetros de Rota:** `id`
-  **Requer Permissões:** Usuário autenticado (Bearer Token).
-  **Resposta:**
    ```http
    Status: 200 Ok

    {
      "id": 1,
      "name": "Prato 1",
      "description": "Descrição do prato",
      "category": "meal",
      "image": "prato_1.png",
      "price": 99.99,
      "ingredients": ["Ingrediente 1", "Ingrediente 2"]
    }
    ```
&nbsp;

#### **Deletar prato  (Apenas administradores):**
-  **Método:** DELETE
-  **Endpoint:** `/dishes/{id}`
-  **Parâmetros de Rota:** `id`
-  **Requer Permissões:** Usuário autenticado (Bearer Token) e administrador.
- **Resposta:**
    ```http
    Status: 200 Ok
    ```
&nbsp;

## Controle de imagens 🖼️

Nessa rota, é passada uma imagem, para atualizar a imagem do prato.

#### **Upload da imagem:**
-  **Método:** PATCH
-  **Endpoint:** `/dishes/{id}`
-  **Parâmetros de Rota:** `id`
-  **Requer Permissões:** Usuário autenticado (Bearer Token) e administrador.
-  **Tipo de Conteúdo Aceito:** `multipart/form-data`
-  **Resposta:**
    ```json
    {
      "id": 1,
      "name": "Prato atualizado",
      "description": "Descrição do prato atualizado",
      "category": "Categoria atualizada",
      "image": "Imagem_atualizada.png",
      "price": 19.99,
      "ingredients": ["Ingrediente atualizado", "Ingrediente atualizado"]
    }
    ```

**Campos do Formulário:**
- `image`: Arquivo da imagem do prato (tipo: `arquivo`).

&nbsp;

## Favoritos 💟

#### **Criar novo favorito:**
-  **Método:** POST
-  **Endpoint:** `/favorites/{dish_id}`
-  **Parâmetros de Rota:** `dish_id`
-  **Requer Permissões:** Usuário autenticado (Bearer Token).
-  **Resposta:**
    ```http
    Status: 201 Created
    ```
&nbsp;
#### **Listar favoritos:**
-  **Método:** GET
-  **Endpoint:** `/favorites`
-  **Requer Permissões:** Usuário autenticado (Bearer Token).
-  **Resposta:**
    ```http
    Status: 200 Ok

    [
      {
        "id": 1,
        "name": "Prato 1",
        "description": "Descrição do prato",
        "category": "meal",
        "image": "prato_1.png",
        "price": 99.99,
        "ingredients": ["Ingrediente 1", "Ingrediente 2"],
        "isFavorite": true
      },
      {
        "id": 2,
        "name": "Prato 2",
        "description": "Descrição do prato",
        "category": "drink",
        "image": "prato_2.png",
        "price": 89.99,
        "ingredients": ["Ingrediente 1", "Ingrediente 2"],
        "isFavorite": true
      }
    ]
    ```
&nbsp;

#### **Deletar favorito:**
-  **Método:** DELETE
-  **Endpoint:** `/favorites/{dish_id}`
-  **Parâmetros de Rota:** `dish_id`
-  **Requer Permissões:** Usuário autenticado (Bearer Token).
-  **Resposta:**
    ```http
    Status: 200 Ok
    ```
&nbsp;
## 🤝 Contribuições

Agradeço por considerar contribuir para a **Food Explorer API**! Contribuições são importantes para melhorar e evoluir o projeto. Aqui estão algumas maneiras pelas quais você pode contribuir:

### 1. Abertura de Issues

Se você encontrar problemas, bugs ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue. Certifique-se de incluir detalhes suficientes para que possamos entender o problema ou a sugestão.

### 2. Envio de Pull Requests (PRs)

Se você deseja fazer alterações no código, pode criar um fork deste repositório, fazer suas alterações no seu fork e, em seguida, enviar um Pull Request. Certifique-se de descrever as alterações que você fez e explicar como isso beneficia o projeto.

### 3. Melhoria da Documentação

A documentação é fundamental para manter a API acessível e fácil de entender. Se você identificar partes do código que precisam de documentação adicional, pode contribuir adicionando comentários claros ou atualizando o README.

### Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie suas alterações para o GitHub: `git push origin feature/nome-da-sua-feature`.
5. Abra um Pull Request para este repositório.

🤝 Agradeço por sua contribuição!
## 📄 Licença

A **Food Explorer API** é distribuída sob a licença MIT. Isso significa que você pode usar, modificar e distribuir o código desta API livremente, desde que inclua a declaração de direitos autorais e a licença MIT em qualquer cópia ou parte dela.
