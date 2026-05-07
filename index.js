import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { vermelho, roxo, ciano, reset, negrito, rosa, verde } from "./cores_terminal.js";
import baralhos from "./Dados/baralho.js";
import flashcards from "./Dados/flashcard.js";
import adicionar_baralho from "./Create/adicionar_baralho.js";
import adicionar_flashcard from "./Create/adicionar_flashcard.js";
import listar_baralho from "./Read/listar_baralho.js";
import listar_flashcard from "./Read/listar_flashcard.js";
import listar_por_baralho from "./Read/listar_por_baralho.js";
import atualizar_baralhos from "./Update/atualizar_baralho.js";
import atualizar_flashcards from "./Update/atualizar_flashcard.js";
import remover_baralho from "./Delete/remover_baralho.js";
import remover_flashcard from "./Delete/remover_flashcard.js";
import buscar_pergunta from "./Search/buscar_pergunta.js";
import menu from "./menu.js"

let opcao = 0;
let id_escolhido = 0;
let confirmar = "";
let id_remover = 0;
let novos_dados = {};

do {

    menu();
    opcao = Number(prompt(`${negrito}${ciano}⦙ Digite a opção desejada: ${reset}`));
    console.clear();

    switch (opcao) {

        case 0:

            console.log(`${roxo}    
╭────────────────────────────────────╮                              
│${reset}           Até a próxima!${roxo}           │
╰────────────────────────────────────╯${reset}\n`);
            setTimeout(function() {
                
                console.clear();
                
            }, 2000);

        break;
        
        case 1:

        let novo_baralho = {
            titulo: prompt(`${negrito}${ciano}⦙ Digite o seu titulo: ${reset}`)
        }
        adicionar_baralho(novo_baralho);

        break;
    
        case 2:

            let novo_flashcard = { 
                pergunta:prompt(`${negrito}${ciano}⦙  Digite sua pergunta: ${reset}`),
                resposta: prompt(`${negrito}${ciano}⦙ Digite a sua resposta: ${reset}`)
            };
            adicionar_flashcard(novo_flashcard,flashcards);

        break;
        
        case 3:
            
            listar_baralho(baralhos);
            console.log();
            prompt(`${negrito}${rosa}⦙ Digite${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 4:
            
            listar_flashcard(flashcards);
            console.log();
            prompt(`${negrito}${rosa}⦙ Digite${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 5:
            
            id_escolhido = prompt(`${negrito}${ciano}⦙ Digite o ID desejado: ${reset}`);
            listar_por_baralho(id_escolhido);
            
            console.log();
            prompt(`${negrito}${rosa}⦙ Digite${reset} ${verde}Enter${reset} ${negrito}${rosa}para voltar ao menu ...${reset}`);

        break;
        
        case 6:
                let id = prompt('digite o id do baralho: ')
            novos_dados = {
                titulo: prompt(`${negrito}${ciano}⦙ Digite um novo titulo: ${reset}`)
            };
                atualizar_baralhos(id, novos_dados, baralhos);

        break;
        
        case 7:

            novos_dados = {
                pergunta : prompt(`${negrito}${ciano}⦙ Digite sua pergunta: ${reset}`),
                resposta: prompt( `${negrito}${ciano}⦙ Digite sua resposta: ${reset}`)  
        
            };
            atualizar_flashcards(id, novos_dados);

        break;
        
        case 8:
            
            id_remover = parseInt(prompt(`${negrito}${ciano}⦙ ID do baralho a ser removido: ${reset}`));
            confirmar = prompt(`${negrito}${ciano}⦙ Tem certeza que deseja remover este baralho? (sim/não): ${reset}`);

            if (confirmar.toLowerCase() === 'sim') {
                remover_baralho(baralhos, id_remover);
                console.log(`${negrito}${rosa}⦙ Baralho removido com sucesso!${reset}`);
            } else {
                console.log(`${negrito}${vermelho}⦙ Operação cancelada.${reset}`);
            };

        break;
        
        case 9:

            id_remover = parseInt(prompt(`${negrito}${ciano}⦙ ID do flashcard a ser removido: ${reset}`));
            confirmar = prompt(`${negrito}${ciano}⦙ Tem certeza que deseja remover este flashcard? (sim/não): ${reset}`);

            if (confirmar.toLowerCase() === 'sim') {
                remover_flashcard(flashcards, id_remover);
                console.log(`${negrito}${rosa}⦙ Flashcard removido com sucesso!${reset}`);
            } else {
                console.log(`${negrito}${vermelho}⦙ Operação cancelada.${reset}`);
            };

        break;
        
        case 10:
            
            buscar_pergunta(flashcards)
            
        break;
        
        default:

            console.log(`${negrito}${vermelho}⦙ Opção inválida. Tente novamente.${reset}`);
            
        break;
    };

} while (opcao != 0);