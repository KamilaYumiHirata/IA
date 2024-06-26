const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a porcentagem que você considera relacionado ao seu sonhecimento sobre batatas?",
        alternativas: [
            {
                texto: "De 0% a 50%",
                afirmacao: "Uma resposta considerável sobre seu conhecimento, pronto(a) para seu resultado?"
            },
            {
                texto: "De 50% a 100%",
                afirmacao: "Começou bem, está pronto(a) para saber seu resultado?"
            }
        ]
    },
    {
        enunciado: "Quantos estilos de batatas você acha que existem?",
        alternativas: [
            {
                texto: "5 estilos apenas",
                afirmacao: "Assim como ovos, batatas tem muitas variantes em seu nome, seria difícil concluir que ela tenha 5 estilos diferentes apenas (errou)."
            },
            {
                texto: "5 ou mais estilos",
                afirmacao: "Batatas, sua variedade é visível, para amantes desse legume delicioso não se pode faltar pelo menos 1 tipo de variável na alimentação, seja cozida,frita, em chips,entre muitos outros (acertou)."
            }
        ]
    },
    {
        enunciado: "O que compõe a batata?",
        alternativas: [
            {
                texto: "É uma boa fonte de vitamina C e de algumas vitaminas do complexo B, niacina, tiamina e vitamina B6",
                afirmacao: "Sim! a batata é rica em vitamina C e vitaminas do complexo B, principalmente niacina no qual dentre os alimentos energéticos é o mais rico, tiamina e vitamina B6, é uma fonte de ferro, bem como fósforo e magnésio além de ótima fonte de potássio (acertou)."
            },
            {
                texto: "É uma boa fonte de vitamina A e de algumas vitaminas do complexo E, Riboflavina e Folato",
                afirmacao: "A batata é rica em vitamina C e algumas outras vitaminas do complexo B, principalmente niacina no qual dentre os alimentos energéticos é o mais rico, tiamina e vitamina B6, além de muitos outros benefícios, saber sobre as vitaminas da sua alimentação do dia a dia é essencial para a saúde, mais sorte na próxima (errou)."
            }
        ]
    },
    {
        enunciado: "Como a batata chegou ao Brasil?",
        alternativas: [
            {
                texto: "Através dos portugueses, os colonizadores que conquistavam a região sul encontraram condições favoráveis à sua produção, fazendo com que a batata fosse uma alimentação primária para os colonos até o início do Século XX.",
                afirmacao: "Curiosidade, quem realmente trouxe as batatas para o Brasil foram os espanhóis que conquistando o sul acharam condições favoráveis de produção para esse alimento, tornando-o a alimentação primária da época que durou até o final do século XIX (errou)."
            },
            {
                texto: "Através dos espanhóis, os colonizadores que conquistavam a região sul encontraram condições favoráveis à sua produção, fazendo com que a batata fosse uma alimentação primária para os colonos até o final do Século XIX.",
                afirmacao: "Mesmo que o berço das batatas esteja bem ali no Chile, quem realmente trouxe esse alimento até nosso país foram os espanhóis que conquistando o sul acharam condições favoráveis de produção para esse alimento, tornando-o a alimentação primária da época (acertou)."
            }
        ]
    },
    {
        enunciado: "Qual o tempo de cozimento da batata?",
        alternativas: [
            {
                texto: "De 20 a 50 minutos dependendo do aparelho e jeito que se cozinha.",
                afirmacao: "O cozimento das batatas na maior parte das vezes é demorado, porém tudo depende da temperatura do aparelho utilizado, alguns pode cozir esse legume em até 15 minutos (errou)."
            },
            {
                texto: "De 10 a 40 minutos dependendo do aparelho e jeito que se cozinha.",
                afirmacao: "O cozimento das batatas pode ser um processo demorado, porém, na temperatura certa podem levar apenas 15 minutos, geralmente chegando no máximo na maioria das vezes em até 40 minutos (acertou)."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu resultado...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();