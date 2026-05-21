import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { vermelho, roxo, ciano, reset, negrito, rosa, verde } from "./cores_terminal.js";
import baralhos from "./Dados/baralho.js";
import flashcards from "./Dados/flashcard.js";
import adicionar_baralho from "./Create/adicionar_baralho.js";
import adicionar_flashcard from "./Create/adicionar_flashcard.js";
import listar_baralho from "./Read/listar_baralho.js";
import listar_flashcard from "./Read/listar_flashcard.js";
import listar_por_baralho from "./Read/listar_por_baralho.js";
import atualizar_baralhos from "./Update/atualizar_baralho.js";
import atualizar_flashcards from "./Update/atualizar_flashcard.js";
import remover_baralho from "./Delete/remover_baralho.js";
import remover_flashcard from "./Delete/remover_flashcard.js";
import buscar_pergunta from "./Search/buscar_pergunta.js";
import menu from "./menu.js"

import express from "express"; // chamei o express para criar o servidor 
const app = express(); // criei o servidor
const porta = 3000; // defini a porta onde o servidor vai rodar

app.use(express.json());
app.get("/", (req, res) => { // criei a rota para a página inicial
  res.send("Bem-vindo ao Flashcard!"); //adicionei uma resposta para a rota
});

app.post("/flashcard", (req, res) => {
    let idflashcards; // declarei a variável para o id do flashcard
    const { pergunta, resposta, idbaralho } = req.body; // peguei os dados do corpo da requisição
    if (flashcards.length === 0) {
    idflashcards = 1; 
    } else {
    idflashcards = flashcards[flashcards.length - 1].idflashcards + 1; // gerei um novo id para o flashcard
    }
   
   
        const novoFlashcard = { idflashcards, pergunta, resposta, idbaralho }; // criei um novo flashcard com os dados recebidos
    
    flashcards.push(novoFlashcard); // adicionei o novo flashcard ao array de flashcards
    res.status(201).send({message :"Flashcard criado com sucesso!",listflashcard: flashcards}); // enviei uma resposta de sucesso para o cliente
})




app.listen(porta, () => { // coloquei o servidor para ouvir a porta definida
  console.log(`Servidor rodando em http://localhost:${porta}`); // adicionei um console log para informar que o servidor está rodando
});


