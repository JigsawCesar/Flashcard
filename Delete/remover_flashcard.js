const remover_flashcard = (flashcards, id) => {
    const indice = flashcards.findIndex(flashcard => flashcard.id === id)

    if (indice !== -1) {
        flashcards.splice(indice, 1)
    };
};

export default remover_flashcard;