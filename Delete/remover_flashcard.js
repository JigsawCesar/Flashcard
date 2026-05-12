import { negrito, vermelho, reset, rosa } from "../cores_terminal.js";

const remover_flashcard = (flashcards, id) => {
    const indice = flashcards.findIndex(flashcard => flashcard.id === id)

    if (indice === -1) {
        console.log(`${negrito}${vermelho}⦙ Erro: Flashcard não encontrado!${reset}`);
        return;
    }

    flashcards.splice(indice, 1);
};

export default remover_flashcard;