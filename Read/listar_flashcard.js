import baralhos from "../Dados/baralho.js";
import { ciano, vermelho, negrito, reset } from "../cores_terminal.js";

const listar_flashcard = (flashcards) => {
    
    if (flashcards.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum flashcard cadastrado!${reset}`);
        return
    };

    flashcards.forEach(flashcard => {
        const baralho = baralhos.find(b => b.id === flashcard.idBaralho);
        const nome_baralho = baralho ? baralho.titulo : "Desconhecido";
        console.log(`${negrito}${ciano}\n⦙ ID:${reset} ${flashcard.id} ${negrito}${ciano}`);
        console.log(`${negrito}${ciano}⦙ Baralho:${reset} ${nome_baralho}`);
        console.log(`\n${negrito}${ciano}⦙ Pergunta:${reset} ${flashcard.pergunta}`);
        console.log(`${negrito}${ciano}⦙ Resposta:${reset} ${flashcard.resposta}`);
        console.log("______________________________________________________________________");
        
        
    });

};

export default listar_flashcard;