const atualizar_baralho = (id, novos_dados)=> {
  const indice = baralhos.findIndex((baralhos) => baralhos.id === id);

  if (indice === -1) {
    console.log(" Erro: Usuario não encontrado... ");
    return;
  };
};
    if (novos_dados.titulo) {
        let dados_em_uso = false;
            for (let i = 0; i < baralhos.length; i++) {
                let baralho_atual = baralhos[i];
    
    
    
if(baralho_atual.titulo === novos_dados.titulo && baralho_atual.id !== id ) {
     dados_em_uso = true;
        break;
    }
  }
  
if (dados_em_uso) {
    console.log(" Erro: Os novos dados já estão em uso por outro usuario ");
    return;
  }
}
baralhos[indice].id = novos_dados.id || baralhos[indice].id;
baralhos[indice].titulo = novos_dados.titulo || baralhos[indice].titulo;
console.log(" Baralho atualizado com sucesso ");
