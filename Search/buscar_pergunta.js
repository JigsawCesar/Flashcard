import promptSync from "prompt-sync";
import { vermelho, reset, ciano, negrito, rosa } from "../cores_terminal.js" 
const prompt= promptSync();

const buscar_pergunta = (flashcards) => {

  let entrada = prompt(`${negrito}${ciano}⦙ Digite sua pesquisa: ${reset}`);
  let filtro = flashcards.filter(flashcards => flashcards.pergunta.toLowerCase().includes(entrada.toLowerCase()))

  if (filtro.length > 0){

    console.log(`\n${negrito}${rosa}⦙ Alguns resultados encontrados: ${reset}`);
    console.log(filtro);
  
  } else {

  console.log(`${vermelho}${negrito}⦙ Nenhum resultado encontrado!${reset}`);

  };
};

export default buscar_pergunta;