import flashcards from "../Dados/flashcard";
import { negrito, reset, vermelho } from "../cores_terminal";

const listar_por_baralho = (id_escolhido) => {
    
    // Filtra apenas os flashcards que possuem o ID do baralho selecionado
    const filtrados = flashcards.filter(filtrado => filtrado.idBaralho === id_escolhido);

    if (filtrados.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum flashcard encontrado para este baralho!${reset}`);
    } else {
        // Reutiliza a função existente para exibir os resultados filtrados
        listar_flashcard(filtrados);
    }
};

export default listar_por_baralho;