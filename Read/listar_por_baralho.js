import baralhos from "../Dados/baralho.js";
import flashcards from "../Dados/flashcard.js";
import { negrito, reset, vermelho, amarelo } from "../cores_terminal.js";
import listar_flashcard from "./listar_flashcard.js";

const listar_por_baralho = (id_escolhido) => {
    
    const baralho_existe = baralhos.some(baralho => baralho.id === Number(id_escolhido));

    if (!baralho_existe) {
        console.log(`${negrito}${vermelho}\n⦙ Baralho não encontrado!${reset}`);
        return;
    }

    const filtrados = flashcards.filter(filtrado => filtrado.idBaralho === Number(id_escolhido));

    if (filtrados.length === 0) {
        console.log(`${negrito}${amarelo}\n⦙ Este baralho não possui flashcards ainda.${reset}`);
    } else {
        listar_flashcard(filtrados);
    }
};

export default listar_por_baralho;