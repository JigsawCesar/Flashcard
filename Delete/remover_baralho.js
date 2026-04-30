const remover_baralho = (baralhos, flashcards, id) => {
    
    const indice = baralhos.findIndex(baralho => baralho.id === id);

    if (indice !== -1) {
        baralhos.splice(indice, 1);

        return flashcards.filter(flashcard => flashcard.idBaralho !== id);
    };
};

export default remover_baralho;