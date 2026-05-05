// Exibir todos os flashcards cadastrados
import { ciano, vermelho, negrito, reset } from "../cores_terminal.js";

const listar_flashcard = (flashcards) => {
    
    if (flashcards.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum flashcard cadastrado!${reset}`);
        return
    };

    flashcards.forEach(flashcard => {
        console.log(`\n${negrito}${ciano}\n⦙ ID:${reset} ${flashcard.id}`);
        console.log(`${negrito}${ciano}\n⦙ Pergunta:${reset} ${flashcard.pergunta}`);
        console.log(`${negrito}${ciano}\n⦙ Resposta:${reset} ${flashcard.resposta}`);
        
    });

};

export default listar_flashcard;