// Estado do Jogo
let perguntas = [];
let indiceAtual = 0;
let pontuacao = 0;
let nomeJogador = "";

const formConfig = document.getElementById('form-config');
const sectionConfig = document.querySelector('.config-section');
const sectionQuiz = document.querySelector('.quiz-section');
const sectionRanking = document.querySelector('.ranking-section');
const containerErro = document.getElementById('mensagem-erro');
const btnTema = document.getElementById('btn-tema');

let ranking = [];

// --- REQUISITO BÔNUS: MODO ESCURO COM LOCALSTORAGE ---
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("modoEscuro");
    if (temaSalvo === "true") {
        document.body.classList.add("dark-mode");
    }
    renderizarRanking(ranking);
});

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoEscuro", isDarkMode);
});

document.getElementById('nome').addEventListener('input', (e) => {
    const headerP = document.querySelector('header p');
    if(e.target.value.trim() !== "") {
        headerP.textContent = `Preparado para o desafio, ${e.target.value}?`;
    } else {
        headerP.textContent = `Mostre que você é um mestre dos conhecimentos gerais!`;
    }
});

formConfig.addEventListener('submit', async (e) => {
    e.preventDefault();
    nomeJogador = document.getElementById('nome').value;
    const tema = document.getElementById('tema').value;

    // R5: Requisição GET a uma API pública com tratamento de erro
    try {
        containerErro.style.display = 'none';
        const resposta = await fetch(`https://opentdb.com/api.php?amount=10&category=${tema}&type=multiple`);
        
        if (!resposta.ok) throw new Error("Erro na comunicação com a API");
        
        const dados = await resposta.json();
        
        if(dados.results.length === 0) {
            throw new Error("Não encontramos perguntas para este tema no momento.");
        }

        perguntas = dados.results;
        indiceAtual = 0;
        pontuacao = 0;

        sectionConfig.style.display = 'none';
        sectionQuiz.style.display = 'block';
        
        renderizarPergunta(perguntas[indiceAtual]);

    } catch (erro) {
        containerErro.textContent = "Ops! Não conseguimos carregar as perguntas. Verifique sua internet e tente novamente.";
        containerErro.style.display = 'block';
    }
});

// --- REQUISITO R3: Gerar lista (alternativas) a partir de vetor de objetos ---
function renderizarPergunta(perguntaObj) {
    document.querySelector('.quiz-status span:first-child').textContent = `Pergunta ${indiceAtual + 1}/10`;
    document.querySelector('.quiz-status span:last-child').textContent = `Pontos: ${pontuacao}`;
    
    const tituloPergunta = document.querySelector('.pergunta');
    tituloPergunta.innerHTML = perguntaObj.question;

    const gridAlternativas = document.querySelector('.alternativas-grid');
    gridAlternativas.innerHTML = "";

    const alternativas = [...perguntaObj.incorrect_answers, perguntaObj.correct_answer];
    alternativas.sort(() => Math.random() - 0.5);

    alternativas.forEach(alt => {
        const btn = document.createElement('button');
        btn.className = 'btn-alternativa';
        btn.innerHTML = alt;
        btn.addEventListener('click', () => checarResposta(alt, perguntaObj.correct_answer));
        gridAlternativas.appendChild(btn);
    });
}

function checarResposta(selecionada, correta) {
    if (selecionada === correta) {
        pontuacao += 10;
    }

    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        renderizarPergunta(perguntas[indiceAtual]);
    } else {
        finalizarQuiz();
    }
}

function finalizarQuiz() {
    sectionQuiz.style.display = 'none';
    sectionConfig.style.display = 'block';
    
    ranking.push({ id: Date.now(), nome: nomeJogador, pontos: pontuacao });
    ranking.sort((a, b) => b.pontos - a.pontos);
    ranking = ranking.slice(0, 5); // Mantém apenas o Top 5
    
    renderizarRanking(ranking);
    formConfig.reset();
    document.querySelector('header p').textContent = `Mostre que você é um mestre dos conhecimentos gerais!`;
    alert(`Fim de jogo! Você fez ${pontuacao} pontos.`);
}

// --- REQUISITO R3: Gerar lista (ranking) a partir de vetor de objetos ---
function renderizarRanking(lista) {
    const ulRanking = document.querySelector('.ranking-lista');
    ulRanking.innerHTML = ""; // Limpa HTML fixo
    
    lista.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${index + 1}. ${item.nome}</span> <span>${item.pontos} pts</span>`;
        ulRanking.appendChild(li);
    });
}