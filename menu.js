import { negrito, vermelho, reset, amarelo, roxo } from "./cores_terminal.js";

const menu = () => {
    console.log(`
${roxo}=======================================
===== ${negrito}${amarelo}SISTEMA DE FLASHCARDS v1.0${reset} ${roxo}======
=======================================
${roxo}⦙                                      ⦙
${roxo}⦙ ${negrito}${amarelo}[1]${reset}  - ${amarelo}Adicionar Baralho${reset}             ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[2]${reset}  - ${amarelo}Adicionar Flashcard${reset}           ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[3]${reset}  - ${amarelo}Listar Baralhos${reset}               ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[4]${reset}  - ${amarelo}Listar Flashcards${reset}             ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[5]${reset}  - ${amarelo}Listar por Baralho${reset}            ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[6]${reset}  - ${amarelo}Atualizar Baralho${reset}             ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[7]${reset}  - ${amarelo}Atualizar Flashcard${reset}           ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[8]${reset}  - ${amarelo}Remover Baralho${reset}               ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[9]${reset}  - ${amarelo}Remover Flashcard${reset}             ${roxo}⦙
${roxo}⦙ ${negrito}${amarelo}[10]${reset} - ${amarelo}Buscar por Pergunta${reset}          ${roxo}⦙
${roxo}⦙                                      ⦙
${roxo}⦙ ${vermelho}[0]${reset} - ${vermelho}Sair${reset}                           ${roxo}⦙
${roxo}=======================================${reset}`);
    
};

export default menu;