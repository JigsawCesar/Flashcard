// Exibir todos os baralhos cadastrados
import { ciano, vermelho, negrito, reset } from "../cores_terminal.js";

const listar_baralho = (baralhos) => {
    
    if (baralhos.length === 0) {
        console.log(`${negrito}${vermelho}\n⦙ Nenhum baralho cadastrado!${reset}`);
        return
    };

    baralhos.forEach(baralho => {
        console.log(`\n${negrito}${ciano}\n⦙ ID:${reset} ${baralho.id}`);
        console.log(`${negrito}${ciano}\n⦙ Título:${reset} ${baralho.titulo}`);
    });

};

export default listar_baralho;