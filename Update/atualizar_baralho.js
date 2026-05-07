const atualizar_baralho = (id, novos_dados, baralhos) => {

const indice = baralhos.findIndex(baralho => baralho.id === id);

baralhos[indice].id

 if (indice === -1) {
    console.log("Erro: Baralho não encontrado.");
    return;
}

if (novos_dados.titulo) {
    const conflitos = baralhos.filter(baralho => 
            baralho.titulo === novos_dados.titulo && baralho.id !== id
            );
            
            
            if (conflitos.length > 0) {
                console.log("Erro: Os novos dados já estão em uso por outro baralho."); 
                return;
            }
}

        
        
        baralhos[indice].id = novos_dados.id || baralhos[indice].id;
        baralhos[indice].titulo = novos_dados.titulo || baralhos[indice].titulo;
        
        console.log("Baralho atualizado com sucesso!");
    };
    
    export default atualizar_baralho;
    
