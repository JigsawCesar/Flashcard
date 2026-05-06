import baralhos from "../Dados/baralho";
import { reset, negrito, vermelho } from "../cores_terminal";

const adicionar_baralho = (novo_baralho) => {
   
    const conflitos_id = baralhos.filter(baralho => 
        baralho.id === novo_baralho.id
    );

    if (conflitos_id.length > 0) {
        console.log(`${negrito}${vermelho}⦙ Erro: o ID informado já está em uso!${reset}`);
        return;
    }

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
        id: novo_baralho.id,
        titulo: novo_baralho.titulo
    };

    baralhos.push(baralho_formatado);

    console.log("baralho_criado_com_sucesso");
};

export default adicionar_baralho;
