import flashcards from "../Dados/flashcard.js";
import { negrito, reset, vermelho } from "../cores_terminal.js";
import listar_flashcard from "./listar_flashcard.js";

const listar_por_baralho = (id_escolhido) => {
    
    const filtrados = flashcards.filter(filtrado => filtrado.idBaralho === Number(id_escolhido));

    if (filtrados.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum flashcard encontrado para este baralho!${reset}`);
    } else {
        listar_flashcard(filtrados);
    }
};

export default listar_por_baralho;