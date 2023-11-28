const perguntas = [
    {
      pergunta: "Qual é o álbum mais vendido de Michael Jackson?",
      opcoes: ["Thriller", "Bad", "Dangerous", "Off the Wall"],
      resposta: "Thriller"
    },
    {
      pergunta: "Em que ano Michael Jackson lançou a música 'Thriller'?",
      opcoes: ["1982", "1983", "1984", "1985"],
      resposta: "1982"
    },
    {
      pergunta: "Qual é o nome do famoso rancho de Michael Jackson na Califórnia?",
      opcoes: ["Neverland Ranch", "Wonderland Ranch", "Dreamland Ranch", "Fantasy Ranch"],
      resposta: "Neverland Ranch"
    },
    {
      pergunta: "Quantos irmãos Michael Jackson tinha?",
      opcoes: ["3", "4", "5", "6"],
      resposta: "5"
    },
    {
      pergunta: "Qual era o nome do primeiro grupo musical de Michael Jackson?",
      opcoes: ["The Jackson Five", "The Jackson Brothers", "The Jacksons", "The Jackson Crew"],
      resposta: "The Jackson Five"
    },
 
  ];
  
  let perguntaAtual = 0
  const elementoPergunta = document.getElementById('pergunta')
  const elementoOpcoes = document.getElementById('opcoes')
  const elementoFeedback = document.getElementById('feedback')
  
  function exibirPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual]
    elementoPergunta.textContent = perguntaAtualObj.pergunta
  
    const opcoes = perguntaAtualObj.opcoes.map(opcao => `<input type="radio" name="opcao" value="${opcao}">${opcao}<br>`)
    elementoOpcoes.innerHTML = opcoes.join('')
  }
  
  function verificarResposta() {
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked')
    if (!opcaoSelecionada) {
      elementoFeedback.textContent = "Por favor, selecione uma opção."
      return
    }
  
    if (opcaoSelecionada.value === perguntas[perguntaAtual].resposta) {
      elementoFeedback.textContent = "Resposta correta!"
    } else {
      elementoFeedback.textContent = `Resposta incorreta. A resposta correta é: ${perguntas[perguntaAtual].resposta}`
    }
  
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      exibirPergunta();
    } else {
      elementoFeedback.textContent = "Quiz concluído!"
      elementoOpcoes.innerHTML = ''
    }
  }
  

function recomecarQuiz() {
    perguntaAtual = 0;
    exibirPergunta();
    elementoFeedback.textContent = '';
  }
  
  exibirPergunta()
  