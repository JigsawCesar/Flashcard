import flashcards from "../Dados/flashcard.js";
import { negrito, vermelho, reset, rosa } from "../cores_terminal.js";

const atualizar_flashcard = (id, novos_dados) => {
 
    const indice = flashcards.findIndex(f => f.id === Number(id));

    if (indice === -1) {
        console.log(`${negrito}${vermelho}⦙ Erro: Flashcard não encontrado!${reset}`);
        return;
    }

    if (novos_dados.pergunta) {
        let pergunta_em_uso = false;
        
        for (let i = 0; i < flashcards.length; i++) {
            let flashcard_atual = flashcards[i];
         
            if (flashcard_atual.pergunta === novos_dados.pergunta && flashcard_atual.id !== Number(id)) {
                pergunta_em_uso = true;
                break;
            }
        }

        if (pergunta_em_uso) {
            console.log(`${negrito}${vermelho}⦙ Erro: A pergunta já existe!${reset}`);
            return;
        }
    }

   
    flashcards[indice].pergunta = novos_dados.pergunta || flashcards[indice].pergunta;
    flashcards[indice].resposta = novos_dados.resposta || flashcards[indice].resposta;

    console.log(`${negrito}${rosa}⦙ Flashcard atualizado com sucesso!${reset}`);
};

export default atualizar_flashcard;