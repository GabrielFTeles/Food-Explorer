# 🍔 Food Explorer - Front End.

## Sobre o Projeto

✨ O projeto **Food Explorer** é um Web App que simula um menu interativo de um restaurante fictício. Ele oferece uma experiência envolvente aos usuários, permitindo que eles explorem os pratos, bebidas e opções do cardápio de forma interativa e visualmente atraente. Com o **Food Explorer**, os clientes podem navegar pelos pratos, ver imagens, descrições e informações detalhadas sobre cada item, criando uma experiência gastronômica virtual única.

## 📋 Índice

- 📦 [Pré-requisitos](#-pré-requisitos)
- 🛠️ [Instalação](#%EF%B8%8F-instalação)
- 📂 [Estrutura do Projeto](#-estrutura-do-projeto)
- 💻 [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- 🤝 [Contribuições](#-contribuições)
- 📄 [Licença](#-licença)

##  Desktop 💻
![Desktop Food Explorer](https://cdn.discordapp.com/attachments/1134579917565218897/1147193914340671578/Screenshot_2023-09-01_at_12-38-40_Food_Explorer.png)

## Mobile 📱
![Mobile Food Explorer](https://cdn.discordapp.com/attachments/841898960737402883/1147199015641940078/image.png)

## 📦 Pré-requisitos

Liste de pré-requisitos necessários para que o projeto seja executado com sucesso:

- [Node.js](https://nodejs.org/) - Versão v18.16.0 ou superior.
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) - Versão 9.5.1 ou superior.

## 🛠️ Instalação

Siga os passos abaixo para instalar e configurar a aplicação em um ambiente local:

1. 📥 **Clone o repositório:**

    ```bash
    git clone https://github.com/GabrielFTeles/Food-Explorer.git
    ```

2. 📂 **Navegue para o diretório do projeto:**

    ```bash
    cd ./Food-Explorer/FrontEnd
    ```

3. 📦 **Instale as dependências:**

    ```bash
    npm install
    ```

4. ⚙️ **Crie um arquivo de configuração:**

    Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Por exemplo:

    ```dotenv
    VITE_BASE_URL_API=url_da_api
    ```

    Certifique-se de substituir `url_da_api` pela url da **API** do backend.

5. ▶️ **Inicie o servidor:**

    ```bash
    npm run dev
    ```

Agora a **Aplicação Food Explorer** está instalada, configurada e em execução no seu ambiente local. Você pode começar a usá-la para testes e desenvolvimento.

## 📂 Estrutura do Projeto

```shell
./FrontEnd/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── hooks/
  │   ├── pages/
  │   ├── routes/
  │   ├── services/
  │   ├── styles/
  │   └── main.jsx
  ├── .env
  ├── index.html
  ├── README.md
  └── package.json
```

## 💻 Tecnologias Utilizadas

Liste as principais tecnologias e bibliotecas que você usou no projeto, como:

- [**@phosphor-icons/react**](https://github.com/phosphor-icons/phosphor-react)
- [**axios**](https://axios-http.com/)
- [**jwt-decode**](https://www.npmjs.com/package/jwt-decode)
- [**react**](https://reactjs.org/)
- [**react-currency-input-field**](https://www.npmjs.com/package/react-currency-input-field)
- [**react-dom**](https://reactjs.org/)
- [**react-loader-spinner**](https://www.npmjs.com/package/react-loader-spinner)
- [**react-responsive**](https://www.npmjs.com/package/react-responsive)
- [**react-router-dom**](https://reactrouter.com/web/guides/quick-start)
- [**react-toastify**](https://fkhadra.github.io/react-toastify/introduction)
- [**styled-components**](https://styled-components.com/)
- [**swiper**](https://swiperjs.com/)

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

O app **Food Explorer** é distribuída sob a licença MIT. Isso significa que você pode usar, modificar e distribuir o código desta API livremente, desde que inclua a declaração de direitos autorais e a licença MIT em qualquer cópia ou parte dela.