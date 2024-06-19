// O projeto que você descreveu é um exemplo de aplicação web que utiliza o framework Express.js 
// no backend para servir arquivos HTML diretamente para o frontend. Neste caso, tanto o backend quanto o 
// frontend estão integrados no mesmo projeto, o que é comum em aplicações menores ou em estágios iniciais de desenvolvimento. 
// Vamos analisar os principais componentes desse projeto:

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3333;

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../src')));

// Redireciona a rota raiz (/) para /payment-choice
app.get("/", (req, res) => {
    res.redirect("/frontend-nextjs-typescript-styled-components");
  });
  

app.get('/frontend-nextjs-typescript-styled-components', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/catalogo', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'catalogo.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
