import baralhos from "../Dados/baralho.js";
import { reset, negrito, vermelho, rosa } from "../cores_terminal.js";

const adicionar_flashcard = (novo_flashcard, flashcards) => {
    
    const baralho_existe = baralhos.some(baralho => baralho.id === novo_flashcard.idBaralho);

    if (!baralho_existe) {
        console.log(`${negrito}${vermelho}⦙ Erro: Baralho com ID ${novo_flashcard.idBaralho} não encontrado! ${reset}`);
        return;
    }

    let novo_id;

    if (flashcards.length > 0) {
        novo_id = flashcards[flashcards.length - 1].id + 1;
    } else {
        novo_id = 1;
    };
   
    if (novo_flashcard.pergunta) {
        const pergunta_em_uso = flashcards.filter(flashcard => 
            flashcard.pergunta === novo_flashcard.pergunta
        );

        if (pergunta_em_uso.length > 0) {
            console.log(`${negrito}${vermelho}⦙ Erro: A pergunta já existe ! ${reset}`);
            return;
        };
    };

    const flashcard_formatado = {
        id: novo_id,
        pergunta: novo_flashcard.pergunta,
        resposta: novo_flashcard.resposta,
        idBaralho: novo_flashcard.idBaralho
    };

    flashcards.push(flashcard_formatado);

    console.log(`${negrito}${rosa}⦙ Flashcard adicionado com sucesso! ${reset}`);
};

export default adicionar_flashcard;