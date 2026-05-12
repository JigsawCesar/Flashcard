# 📚 Sistema de Flashcards

_Sistema interativo de gerenciamento de flashcards no terminal com JavaScript_

![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Licença](https://img.shields.io/badge/license-MIT-green)

## 🎯 Sobre o Projeto

Um sistema completo e funcional para gerenciar flashcards e baralhos através de um menu interativo no terminal. Desenvolvido em Node.js com foco em CRUD (Create, Read, Update, Delete) e inclusão de funcionalidades avançadas como exclusão em cascata e busca por conteúdo.

## ✨ Funcionalidades

### 📝 Criação (CREATE)
- ✅ **Adicionar Baralho** - Criar novos baralhos com IDs gerados automaticamente
- ✅ **Adicionar Flashcard** - Adicionar flashcards com pergunta, resposta e associação a baralho

### 📖 Leitura (READ)
- ✅ **Listar Baralhos** - Visualizar todos os baralhos cadastrados
- ✅ **Listar Flashcards** - Ver todos os flashcards do sistema
- ✅ **Listar por Baralho** - Filtrar flashcards por baralho específico

### ✏️ Atualização (UPDATE)
- ✅ **Atualizar Baralho** - Modificar título do baralho
- ✅ **Atualizar Flashcard** - Alterar pergunta e resposta

### 🗑️ Deleção (DELETE)
- ✅ **Remover Baralho** - Deletar baralho com exclusão em cascata de flashcards
- ✅ **Remover Flashcard** - Remover flashcard individual

### 🔍 Busca (SEARCH)
- ✅ **Buscar por Pergunta** - Localizar flashcards pelo conteúdo da pergunta

## 🏗️ Estrutura do Projeto

```
Flashcard/
├── index.js                    # Menu principal interativo
├── menu.js                     # Renderização do menu
├── cores_terminal.js           # Configuração de cores
├── package.json                # Dependências
├── README.md                   # Este arquivo
│
├── Dados/
│   ├── baralho.js             # Armazenamento de baralhos
│   └── flashcard.js           # Armazenamento de flashcards
│
├── Create/
│   ├── adicionar_baralho.js
│   └── adicionar_flashcard.js
│
├── Read/
│   ├── listar_baralho.js
│   ├── listar_flashcard.js
│   └── listar_por_baralho.js
│
├── Update/
│   ├── atualizar_baralho.js
│   └── atualizar_flashcard.js
│
├── Delete/
│   ├── remover_baralho.js
│   └── remover_flashcard.js
│
└── Search/
    └── buscar_pergunta.js
```

## 🚀 Como Usar

### Pré-requisitos
- Node.js 14+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Flashcard.git
cd Flashcard

# Instale as dependências
npm install
```

### Executando

```bash
node index.js
```

## 📋 Menu Interativo

```
=======================================
===== SISTEMA DE FLASHCARDS v1.0 ======
=======================================
⦙                                      ⦙
⦙ [1]  - Adicionar Baralho             ⦙
⦙ [2]  - Adicionar Flashcard           ⦙
⦙ [3]  - Listar Baralhos               ⦙
⦙ [4]  - Listar Flashcards             ⦙
⦙ [5]  - Listar por Baralho            ⦙
⦙ [6]  - Atualizar Baralho             ⦙
⦙ [7]  - Atualizar Flashcard           ⦙
⦙ [8]  - Remover Baralho               ⦙
⦙ [9]  - Remover Flashcard             ⦙
⦙ [10] - Buscar por Pergunta           ⦙
⦙                                      ⦙
⦙ [0] - Sair                           ⦙
=======================================
```

## 💡 Exemplos de Uso

### Exemplo 1: Criar um Baralho
```
Opção: 1
Digite o título do baralho: JavaScript Básico
✓ Baralho criado com sucesso!
```

### Exemplo 2: Adicionar Flashcard
```
Opção: 2
Digite sua pergunta: O que é uma variável?
Digite a sua resposta: Um espaço na memória para armazenar dados
Digite o ID do baralho: 1
✓ Flashcard adicionado com sucesso!
```

### Exemplo 3: Listar Flashcards de um Baralho
```
Opção: 5
Digite o ID do baralho desejado: 1

⦙ ID: 1
⦙ Pergunta: O que é uma variável?
⦙ Resposta: Um espaço na memória para armazenar dados
```

## 🛡️ Validações Implementadas

- ✅ Impede títulos duplicados em baralhos
- ✅ Impede perguntas duplicadas em flashcards
- ✅ Valida IDs antes de qualquer operação
- ✅ Confirmação antes de deletar dados
- ✅ Mensagens de erro formatadas e coloridas
- ✅ **Exclusão em Cascata**: Remover baralho delete automaticamente seus flashcards

## 🎨 Interface

- 🎭 **Cores Personalizadas**: Menu em roxo, sucessos em rosa/verde, erros em vermelho
- 🖥️ **Terminal Responsivo**: Interface adaptada para diferentes tamanhos de terminal
- ⌨️ **Entrada Interativa**: Prompts claros e intuitivos

## 📊 Estrutura de Dados

### Baralho
```javascript
{
  id: 1,
  titulo: "JavaScript"
}
```

### Flashcard
```javascript
{
  id: 1,
  pergunta: "O que é JavaScript?",
  resposta: "Uma linguagem de programação...",
  idBaralho: 1
}
```

## 🔧 Tecnologias

- **Node.js** - Runtime JavaScript
- **JavaScript (ES Modules)** - Linguagem e modularização
- **prompt-sync** - Entrada interativa via terminal
- **Cores ANSI** - Formatação de cores no terminal

## 📚 Conceitos de Aprendizado

- ✅ Modularização com ES Modules
- ✅ Padrão CRUD completo
- ✅ Manipulação de arrays e objetos
- ✅ Validação de dados
- ✅ Programação interativa
- ✅ Tratamento de erros
- ✅ Organização de projetos

## 🤝 Contribuições

Contribuições são bem-vindas! Você pode:
- 🐛 Reportar bugs
- 💡 Sugerir novas funcionalidades
- 📝 Melhorar a documentação
- 🔧 Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Autores

- **Felipe Portela** - [@JigsawCesar](https://github.com/JigsawCesar)
- **Lucas Eduardo Galvão Rodrigues** - [@Apollo2210](https://github.com/Apollo2210)
- **Wendel Jhonatan Sauter** - [@wendel0001](https://github.com/wendel0001)

## 📞 Suporte

Encontrou um problema? Verifique:
1. Se Node.js está instalado: `node --version`
2. Se as dependências foram instaladas: `npm install`
3. Se está na pasta correta do projeto
4. Se os arquivos de dados existem em `Dados/`

---

**Versão:** 1.0.0  
**Última atualização:** Maio de 2026  
**Status:** ✅ Completo e Funcional
