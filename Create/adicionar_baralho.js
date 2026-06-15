import baralhos from "../Dados/baralho.js";
import { reset, negrito, vermelho, rosa } from "../cores_terminal.js";

const adicionar_baralho = (novo_baralho) => {
   
    const novo_id = baralhos.length > 0
    ? baralhos[baralhos.length - 1].id + 1
    : 1;

    if (novo_baralho.titulo) {
        const conflitos_titulo = baralhos.filter(baralho => 
            baralho.titulo === novo_baralho.titulo
        );

        if (conflitos_titulo.length > 0) {
            console.log(`${negrito}${vermelho}⦙ Erro: já existe um baralho com este título.${reset}`);
            return;
        }
    }


    const baralho_formatado = {
        id: novo_id,
        titulo: novo_baralho.titulo
    };

    baralhos.push(baralho_formatado);

    console.log(`${negrito}${rosa}⦙ Baralho criado com sucesso!${reset}`);
};

export default adicionar_baralho;
