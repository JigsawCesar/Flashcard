import promptSync from "prompt-sync";
import { vermelho, reset } from "./cores_terminal.js" 
const prompt= promptSync();

const buscar =(flashcards)=>{

    let entrada = prompt(`pesquise: `);
    let filtro = flashcards.filter(flashcards => flashcards.pergunta.toLowerCase().includes(entrada.toLowerCase()))
   
    if (filtro.length > 0){
      console.log(`
      Alguns resultados encontrados: `);
      console.log(filtro);
      
    } else {
   
    console.log(`========${vermelho} Nenhum resultado encontrado${reset} =======`);
   
    };
};
