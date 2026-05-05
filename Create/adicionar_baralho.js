import baralhos from "../Dados/baralho";

const adicionar_baralho = (novo_baralho) => {
   
    const conflitos_id = baralhos.filter(baralho => 
        baralho.id === novo_baralho.id
    );

    if (conflitos_id.length > 0) {
        console.log("erro: o id informado ja esta em uso.");
        return;
    }

    if (novo_baralho.titulo) {
        const conflitos_titulo = baralhos.filter(baralho => 
            baralho.titulo === novo_baralho.titulo
        );

        if (conflitos_titulo.length > 0) {
            console.log("erro: ja existe um baralho com este titulo.");
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
