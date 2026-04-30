const atualizar_flashcard = (id, novos_dados) => {
   
    const indice = flashcard.findIndex(f => f.id === id)
    if (indice === -1) {
        console.log(" Erro: flashcard não encontrado ! ");
        return;
    }

   
    if (novos_dados.pergunta) {
        const pergunta_em_uso = flashcard.filter(f => 
            f.pergunta === novos_dados.pergunta && f.id !== id
        );

        if (pergunta_em_uso.length > 0) {
            console.log(" Erro: A pergunta já existe ! ");
            return;
        }
    }

    flashcard[indice].pergunta = novos_dados.pergunta || flashcard[indice].pergunta;
    flashcard[indice].resposta = novos_dados.resposta || flashcard[indice].resposta;

    console.log(" Flashcard atualizado com sucesso! ");
};
export default atualizar_flashcard;