![issues](https://img.shields.io/github/issues/quindai/MoviesFlix.svg)
![forks](https://img.shields.io/github/forks/quindai/MoviesFlix.svg)
[![stars](https://img.shields.io/github/stars/quindai/MoviesFlix.svg)](https://github.com/quindai/MoviesFlix/stargazers)
![GPL-3.0 Licence](https://img.shields.io/badge/license-AGPL-blue.svg)

# MoviesFlix

**NOTICE:** No .env variables were used, this is just for testing, please set your env variables for production.

Para rodar você precisa de dois servidores, um de aplicação para os arquivos estáticos, pode ser o nginx, tomcat, lighttpd ou qualquer outro de sua preferência, para o windows vamos usar o http-server, e outro para o conteúdo dinâmico, REST API, conexão com o banco de dados, envio de email, etc, vamos usar o Node com o ExpressJS.

Para instalar o http-server use o seguinte comando:

    npm install -g http-server

## Para rodar:

Navegue até o diretório raiz do projeto no seu terminal (cmd para windows) e insira o comando:

    http-server

Não esqueça de iniciar o seu servidor node com o seguinte comando:

    node server.js

Pronto, você tem dois servidores rodando na sua máquina que vão cumprir com o seu papel.

NOTA: não adianta tentar servir arquivos estáticos com o expressJS, é uma péssima idéia e o teu código vira uma bagunça.
