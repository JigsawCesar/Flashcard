const atualizar_flashcard = (id,pergunta,resposta )=> {
    
    const indice = flashcard.findIndex(flashcard => flashcard.id === id )
        if(indice === -1){
            console.log(" Erro: flashcard não encontrado ! " );
                return
    }
if(novos_dados.pergunta){
let pergunta_em_uso = false
for (let i = 0; i < flashcard.length; i++) {
    let flashcard_atual = flashcard[i]
    if(flashcard_atual.pergunta === novos_dados.pergunta && flashcard_atual.id !== id ) {
    pergunta_em_uso = true
    break
}
}
if(pergunta_em_uso){
    console.log(" Erro: A pergunta já existe ! ")
return
}
}
flashcard[indice].resposta = novos_dados || flashcard[indice].resposta
flashcard[indice].pergunta = novos_dados || flashcard[indice].pergunta

return

}
