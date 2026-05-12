import promptSync from "prompt-sync";
import { vermelho, reset, ciano, negrito, rosa } from "../cores_terminal.js" 
import listar_flashcard from "../Read/listar_flashcard.js";
const prompt= promptSync();

const buscar_pergunta = (flashcards) => {

  let entrada = prompt(`${negrito}${ciano}⦙ Digite a pergunta que deseja pesquisar: ${reset}`);
  let filtro = flashcards.filter(f => f.pergunta.toLowerCase().includes(entrada.toLowerCase()));
  console.clear();

  if (filtro.length > 0){

    console.log(`\n${negrito}${rosa}⦙ Resultados encontrados: ${reset}`);
    listar_flashcard(filtro);
  
  } else {

  console.log(`${vermelho}${negrito}⦙ Nenhum resultado encontrado!${reset}`);

  };
};

export default buscar_pergunta;