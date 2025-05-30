let nome 
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
let contador = 1

function teste() {
    nome = String(prompt("Informe seu nome: "))
    if(nome.trim() == 0){
    alert("Nome vázio tente novamente!!!")
}
else if (regex.test(nome)) {
    alert("Bem-vindo " + nome)
    contador = 0
  } else {
    alert('Rejeitado: contém caracteres inválidos.')
  }
}
while (contador != 0) {
    teste()
}
const quizData = [
  {
    question: "Qual a cor do céu em um dia ensolarado?",
    a: "Verde",
    b: "Azul",
    c: "Vermelho",
    d: "Amarelo",
    correct: "b",
  },
  {
    question: "Quanto é 2 + 2?",
    a: "3",
    b: "5",
    c: "4",
    d: "6",
    correct: "c",
  },
  {
    question: "Qual animal é conhecido como o melhor amigo do homem?",
    a: "Gato",
    b: "Leão",
    c: "Cachorro",
    d: "Cavalo",
    correct: "c",
  },
  {
    question: "Qual fruta é amarela e rica em potássio?",
    a: "Maçã",
    b: "Banana",
    c: "Morango",
    d: "Laranja",
    correct: "b",
  },
  {
    question: "Qual o plural de 'pão'?",
    a: "Pões",
    b: "Pãos",
    c: "Pães",
    d: "Paes",
    correct: "c",
  },
  {
    question: "Qual o número de lados de um triângulo?",
    a: "2",
    b: "4",
    c: "3",
    d: "5",
    correct: "c",
  },
  {
    question: "Qual o continente do Brasil?",
    a: "Europa",
    b: "América do Sul",
    c: "África",
    d: "Ásia",
    correct: "b",
  },
  {
    question: "Qual o maior planeta do sistema solar?",
    a: "Terra",
    b: "Júpiter",
    c: "Saturno",
    d: "Marte",
    correct: "b",
  },
  {
    question: "Quem pintou a Mona Lisa?",
    a: "Van Gogh",
    b: "Michelangelo",
    c: "Da Vinci",
    d: "Picasso",
    correct: "c",
  },
  {
    question: "Qual o símbolo químico da água?",
    a: "O2",
    b: "CO2",
    c: "H2O",
    d: "H2",
    correct: "c",
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    a: "Getúlio Vargas",
    b: "Deodoro da Fonseca",
    c: "Lula",
    d: "Juscelino",
    correct: "b",
  },
  {
    question: "Qual o maior oceano da Terra?",
    a: "Índico",
    b: "Atlântico",
    c: "Antártico",
    d: "Pacífico",
    correct: "d",
  },
  {
    question: "Quantas sílabas tem a palavra 'computador'?",
    a: "5",
    b: "3",
    c: "4",
    d: "2",
    correct: "c",
  },
  {
    question: "Quantos segundos tem um minuto?",
    a: "100",
    b: "60",
    c: "30",
    d: "90",
    correct: "b",
  },
  {
    question: "Qual é o número PI, arredondado?",
    a: "3,14",
    b: "2,17",
    c: "4,00",
    d: "5,01",
    correct: "a",
  },
  {
    question: "Qual país tem o formato aproximado de uma bota?",
    a: "Espanha",
    b: "Argentina",
    c: "Itália",
    d: "Rússia",
    correct: "c",
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    a: "Machado de Assis",
    b: "José de Alencar",
    c: "Clarice Lispector",
    d: "Monteiro Lobato",
    correct: "a",
  },
  {
    question: "O que é um haicai?",
    a: "Um animal",
    b: "Um prato japonês",
    c: "Um poema curto",
    d: "Uma espada",
    correct: "c",
  },
  {
    question: "Qual o menor país do mundo?",
    a: "Mônaco",
    b: "Vaticano",
    c: "Malta",
    d: "Andorra",
    correct: "b",
  },
  {
    question: "Qual o nome do osso da coxa?",
    a: "Fíbula",
    b: "Úmero",
    c: "Fêmur",
    d: "Tíbia",
    correct: "c",
  },
  {
    question: "Quem descobriu a penicilina?",
    a: "Louis Pasteur",
    b: "Albert Einstein",
    c: "Alexander Fleming",
    d: "Isaac Newton",
    correct: "c",
  },
  {
    question: "Qual o idioma falado no Irã?",
    a: "Árabe",
    b: "Persa",
    c: "Turco",
    d: "Curdo",
    correct: "b",
  },
  {
    question: "Qual o maior deserto do mundo?",
    a: "Saara",
    b: "Gobi",
    c: "Antártida",
    d: "Kalahari",
    correct: "c",
  },
  {
    question: "Quantos cromossomos tem um ser humano?",
    a: "46",
    b: "44",
    c: "23",
    d: "48",
    correct: "a",
  },
  {
    question: "Qual a capital do Azerbaijão?",
    a: "Tbilisi",
    b: "Baku",
    c: "Yerevan",
    d: "Kiev",
    correct: "b",
  },
  {
    question: "Quem desenvolveu o teorema da incompletude?",
    a: "Gödel",
    b: "Einstein",
    c: "Euclides",
    d: "Newton",
    correct: "a",
  },
  {
    question: "Qual o metal mais leve da tabela periódica?",
    a: "Lítio",
    b: "Hélio",
    c: "Sódio",
    d: "Berílio",
    correct: "a",
  },
  {
    question: "Quantos elementos tem a tabela periódica (2023)?",
    a: "118",
    b: "120",
    c: "112",
    d: "116",
    correct: "a",
  },
  {
    question: "Qual o número de Euler (e) arredondado?",
    a: "2,71",
    b: "1,61",
    c: "3,14",
    d: "4,44",
    correct: "a",
  },
  {
    question: "Qual o nome da constante da gravidade universal?",
    a: "G",
    b: "C",
    c: "H",
    d: "N",
    correct: "a",
  }
]

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const dica = [
  "Fica do lado do verde", "É o mesmo que 2 * 2",  "É um canino",  "Começa com B", 
  "Termina com ES",  "É um lado a menos que o do quadrado",  "Fica no Sul ", 
  "É um planeta gasoso", "Toma vinte", "Nome de uma bebida",  "Lembra Teodoro", 
  "Ele busca paz", "com/pu/ta/dor", "Meio minuto = 30", "Está próximo do 3,0", 
  "Massa", "Corta árvore", "Uma forma de se expressar",  "Papa", "Perto da tibia",  "Lexa", "Persiana",  "Polo", "o dobro de 23", "Peixe com nome parecido", "Bordel",  "Lembra liquído", "236/2",  "Perto de 3", "Sétima letra do alfabeto"  
  
]

const premio = [
 2400, 4300, 6450, 8600, 10750, 12900, 15050, 17200, 19350,
 21500, 23650, 25800, 27950, 30100, 32250, 34400, 36550, 38700,40850,
 43000, 45150, 47300, 49450, 51600, 53750, 55900, 58050, 60200, 62350, 64500
]

let currentQuiz = 0;
let score = 0;
let ajuda = 0;
let dinheiro = 0;



function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}


submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    tipButton.textContent =  "dica";
    if (answer === quizData[currentQuiz].correct) {
      dinheiro += premio[score];
      score++;
      tipButton.textContent =  "dica";
      if(score == 30){
      quiz.innerHTML = `<h2>Você acertou ${score} de ${quizData.length} perguntas meu caro ${nome}.
      E ganhou R$ ${dinheiro} </h2>
      <button onclick="location.reload()">Reiniciar</button> <a href = "showdomilhão.html"><button>voltar</button></a> `;
      }
    } else {
      quiz.innerHTML = `<h2>Você acertou ${score} de ${quizData.length} perguntas meu caro ${nome}.
      E ganhou R$ ${dinheiro} </h2>
      <button onclick="location.reload()">Reiniciar</button> <a href = "index.html"><button>voltar</button></a> `;
    }
    currentQuiz++;
    if (currentQuiz <= quizData.length) {
      loadQuiz();
    } 
  }
});
tipButton.addEventListener('click', () => {
      // Alterna entre mostrar e esconder o texto da dica
      if (ajuda < 9) {
        tipText.style.display = 'block';
        tipButton.textContent =  dica[score];
        ajuda++
      } else {
        tipText.style.display = 'none';
        alert("Sem dicas meu chapa!!")
      }});
