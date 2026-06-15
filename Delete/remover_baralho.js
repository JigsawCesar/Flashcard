import { negrito, vermelho, reset } from "../cores_terminal.js";

const remover_baralho = (baralhos, flashcards, id) => {
    
    const indice = baralhos.findIndex(baralho => baralho.id === id);

    if (indice === -1) {
        console.log(`${negrito}${vermelho}⦙ Erro: Baralho não encontrado!${reset}`);
        return;
    }

    baralhos.splice(indice, 1);
    
    for (let i = flashcards.length - 1; i >= 0; i--) {
        if (flashcards[i].idBaralho === id) {
            flashcards.splice(i, 1);
        }
    }
};

export default remover_baralho;