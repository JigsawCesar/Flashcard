import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { vermelho, roxo, ciano, reset } from "./cores_terminal.js"
import baralhos from "./Dados/baralho.js";
import flashcards from "./Dados/flashcard.js"
import adicionar_baralho from "./Create/adicionar_baralho.js"
import adicionar_flashcard from "./Create/adicionar_flashcard.js"
import listar_baralho from "./Read/listar_baralho.js"
import listar_flashcard from "./Read/listar_flashcard.js"
import listar_por_baralho from "./Read/listar_por_baralho.js"
import atualiza_baralhos from "./Update/atualizar_baralho.js"
import atualiza_flashcards from "./Update/atualizar_flashcard.js"
import remover_baralho from "./Delete/remover_baralho.js"
import remover_flashcard from "./Delete/remover_flashcard.js"
import buscar_pergunta from "./Search/buscar_pergunta.js"

let opcao = 0;


switch (opcao) {
    
    case 1:
        let novo_baralho={
            titulo: prompt(`Digite o seu titulo:  `)
        }
        adicionar_baralho(novo_baralho)
        break;
    
    case 2:
        
        break;
    
    case 3:
        
        break;
    
    case 4:
        
        break;
    
    case 5:
        
    
        break;
    
    case 6:

    let novos_dados={
        titulo: prompt(`Digite um novo titulo:  `)
    }
        atualiza_baralhos(id, novos_dados)
        break;
    
    case 7:
        
        break;
    
    case 8:
        
        break;
    
    case 9:
        
        break;
    
    case 10:
        buscar_pergunta(flashcards)
        
        break;
    
    default:
    
        break;
}