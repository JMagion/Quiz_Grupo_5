# Trivia Master (Projeto Integrador)

O **Trivia Master** é um jogo de quiz interativo que resolve o problema do entretenimento educativo e da falta de ferramentas de fixação de conhecimento de forma lúdica. O público-alvo são estudantes, curiosos e entusiastas de conhecimentos gerais. A aplicação consome a API pública **OpenTriviaDB**.

## 🌟 Funcionalidades
1. Configuração da partida (inserção de nome e escolha do tema).
2. Exibição de uma rodada dinâmica com 10 perguntas de múltipla escolha geradas a partir da API.
3. Registro de um ranking (Top 5) exibindo as melhores pontuações localmente.

## 🚀 Como Executar
1. O aplicativo está publicado no GitHub Pages: **[INSERIR O LINK DO GITHUB PAGES AQUI]**
2. Caso prefira testar localmente, basta fazer o download do repositório, extrair e abrir o arquivo `index.html` em qualquer navegador.

## 👨‍💻 Integrantes e Responsabilidades
* **[Nome do Aluno 1]**: Estrutura de Interface (HTML e CSS - R1 e R2).
* **[Nome do Aluno 2]**: Consumo de API, tratamento de erros e renderização de listas (R3 e R5).
* **[Nome do Aluno 3]**: Implementação de Eventos e validações (R4 e R9).
* **[Nome do Aluno 4]**: CRUD e persistência via LocalStorage (R6 e Bônus Modo Escuro).
*(Substituam pelos nomes reais e divisões combinadas pelo grupo)*

## ✅ Requisitos Atendidos (até o Checkpoint C2)
- [x] **R1:** HTML semântico (`header`, `main`, `section`, `footer`) e formulário com `label`.
- [x] **R2:** Layout responsivo com Flexbox/Grid e Media Query para celular.
- [x] **R3:** Lista de alternativas e de ranking geradas a partir de um vetor de objetos via JavaScript (sem HTML fixo).
- [x] **R4:** Uso de 3 tipos de eventos (`click`, `submit`, `input`).
- [x] **R5:** Requisição `GET` com o comando `fetch` para uma API pública, possuindo um `try...catch` que emite uma mensagem amigável no DOM (e não um alert) em caso de erro.
- [x] **Bônus:** Modo escuro com preferência do usuário salva via `localStorage`.
- [x] **Bônus:** Acessibilidade (foco de teclado implementado e checagem de contraste).