import { reset, negrito, vermelho, rosa } from "../cores_terminal.js";

const adicionar_flashcard = (novo_flashcard, flashcards) => {
    
  
    const id_em_uso = flashcards.filter(f => f.id === novo_flashcard.id);
    
    if (id_em_uso.length > 0) {
        console.log(`${negrito}${vermelho}⦙ Erro: O ID informado já está em uso! ${reset}`);
        return;
    };
    const novo_id = flashcards.length > 0
    ? flashcards[flashcards.length - 1].id + 1
    : 1;
   
    if (novo_flashcard.pergunta) {
        const pergunta_em_uso = flashcards.filter(f => 
            f.pergunta === novo_flashcard.pergunta
        );

        if (pergunta_em_uso.length > 0) {
            console.log(" Erro: A pergunta já existe ! ");
            return;
        }
    }

    const flashcard_formatado = {
        id: novo_id,
        pergunta: novo_flashcard.pergunta,
        resposta: novo_flashcard.resposta
    };

    flashcards.push(flashcard_formatado);

    console.log(`${negrito}${rosa}⦙ Flashcard adicionado com sucesso! ${reset}`);
};

export default adicionar_flashcard;