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