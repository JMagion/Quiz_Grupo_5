# Diário de IA (IA.md) - Grupo 5

## 05/11/2026 – João Pedro Magion – Gemini
**Prompt:** "Com base no guia do projeto integrador, faça os checkpoint C0 e C1. O projeto vai ser um site que utiliza a API OpenTriviaDB... HTML e CSS de todas as telas..."
**Resposta:** A IA gerou a estrutura inicial do `index.html` com HTML semântico e o `style.css` usando Flexbox e Grid, além da lógica de bônus para o Modo Escuro.
**Aceitei:** A estrutura semântica (header, main, section, footer) e a organização do CSS responsivo. Também aceitamos o script de `localStorage` para o Modo Escuro, pois entendemos como a classe `.dark-mode` é adicionada ao body.
**Rejeitei / Modifiquei:** A IA havia gerado a grade de botões de alternativas de forma estática no HTML para o C1. Modificamos depois no C2 para limpar esse HTML fixo, permitindo que o JavaScript injetasse os botões dinamicamente.

## 05/11/2026 – João Pedro Magion – Gemini
**Prompt:** "O .zip é como o projeto está atualmente, agora vamos fazer o C2 do projeto que incluem os requisitos R3, R4 e R5. Gere os códigos e descreva em detalhes onde inserir..."
**Resposta:** A IA forneceu o arquivo `app.js` com os eventos, manipulação do DOM e o `fetch` para a OpenTriviaDB.
**Aceitei:** A lógica do bloco `try...catch` para o R5, que exibe um erro amigável em uma `div` de aviso na tela caso a API falhe, e o método de embaralhar as alternativas corretas e incorretas usando `Math.random()`.
**Rejeitei / Modifiquei:** A IA enviou o código do mini-servidor Express novamente como bônus. Decidimos rejeitar/adiar a implementação do servidor Node.js no momento para garantir que a versão com `localStorage` estivesse 100% estável e pronta para ser hospedada no GitHub Pages (que não roda o backend).

## 05/11/2026 – João Pedro Magion – Gemini
**Prompt:** "Gere um resumo explicando o que cada parte do código faz para deixar atualizado novos membros que entraram no grupo"
**Resposta:** A IA resumiu a responsabilidade de cada arquivo (HTML, CSS e JS) e a divisão de tarefas do projeto.
**Aceitei:** A explicação conceitual sobre o fluxo de eventos e o consumo da API.
**Rejeitei / Modifiquei:** Adaptamos o texto gerado para colocar na seção de Documentação e repassamos aos novos membros com nossas próprias palavras, adicionando os responsáveis reais de cada tarefa.