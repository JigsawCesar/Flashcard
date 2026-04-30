import flashcards from "../Dados/flashcard"

const adicionar_flashcard = (id, pergunta) => {
    if(flashcards.length > 0){
        let ultimo_flashcard = flashcards[flashcards.length - 1]
        novo_flashcard.id = ultimo_flashcard.id + 1;
    }else {
        novo_flashcard.id = 1
    }
    flashcards.push(novo_flashcard)
    return true;
}
export default adicionar_flashcard;