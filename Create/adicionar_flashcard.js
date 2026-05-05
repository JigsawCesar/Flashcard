const adicionar_flashcard = (novo_flashcard) => {
    
  
    const id_em_uso = flashcard.filter(f => f.id === novo_flashcard.id);
    
    if (id_em_uso.length > 0) {
        console.log(" Erro: O ID informado já está em uso! ");
        return;
    }

   
    if (novo_flashcard.pergunta) {
        const pergunta_em_uso = flashcard.filter(f => 
            f.pergunta === novo_flashcard.pergunta
        );

        if (pergunta_em_uso.length > 0) {
            console.log(" Erro: A pergunta já existe ! ");
            return;
        }
    }

    const flashcard_formatado = {
        id: novo_flashcard.id,
        pergunta: novo_flashcard.pergunta,
        resposta: novo_flashcard.resposta
    };

    flashcard.push(flashcard_formatado);

    console.log(" Flashcard adicionado com sucesso! ");
};

export default adicionar_flashcard;