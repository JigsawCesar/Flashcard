import { negrito, vermelho, reset, rosa } from "../cores_terminal.js";

const atualizar_baralho = (id, novos_dados, baralhos) => {

    const indice = baralhos.findIndex(baralho => baralho.id === Number(id));

    if (indice === -1) {
        console.log(`${negrito}${vermelho}⦙ Erro: Baralho não encontrado.${reset}`);
        return;
    }

    if (novos_dados.titulo) {
        const conflitos = baralhos.filter(baralho => 
            baralho.titulo === novos_dados.titulo && baralho.id !== Number(id)
        );
        
        if (conflitos.length > 0) {
            console.log(`${negrito}${vermelho}⦙ Erro: Os novos dados já estão em uso por outro baralho.${reset}`); 
            return;
        }
    }

    baralhos[indice].titulo = novos_dados.titulo || baralhos[indice].titulo;
    console.log(`${negrito}${rosa}⦙ Baralho atualizado com sucesso!${reset}`);
};

export default atualizar_baralho;
