const palavras = [
  "janela", "garrafa", "cadeira", "travesseiro", "almofada", "bicicleta",
"caminhão", "helicóptero", "esquilo", "canguru", "golfinho", "tartaruga",
"girassol", "tempestade", "relâmpago", "cachoeira", "montanha", "floresta",
"oceano", "deserto", "vulcão", "labirinto", "castelo", "tesouro",
"diamante", "cristal", "espelho", "cortina", "televisão", "geladeira",
"cafeteira", "liquidificador", "micro-ondas", "ventilador", "aspirador",
"parafuso", "martelo", "chaveiro", "mochila", "camiseta", "bermuda",
"gravata", "capacete", "pulseira", "colar", "anel", "sapato", "chinelo",
"escova", "sabonete", "perfume", "shampoo", "escadaria", "corredor",
"banheiro", "cozinha", "garagem", "quintal", "varanda", "apartamento",
"condomínio", "mercado", "padaria", "farmácia", "restaurante", "biblioteca",
"universidade", "hospital", "laboratório", "delegacia", "prefeitura",
"aeroporto", "rodovia", "semáforo", "automóvel", "motocicleta", "bicicleta",
"astronauta", "planeta", "galáxia", "asteroide", "satélite", "cometa",
"gravidade", "atmosfera", "continente", "horizonte", "paisagem", "primavera",
"tempestade", "chuvisco", "neblina", "furacão", "tornado", "aventura",
"mistério", "fantasma", "dragão", "feiticeiro", "guerreiro", "armadura",
"espada", "escudo", "portal", "labirinto", "explorador", "arqueólogo",
"cientista", "professor", "engenheiro", "arquiteto", "motorista", "bombeiro",
"jornalista", "fotógrafo", "cineasta", "escritor", "músico", "cantor",
"pintor", "escultor", "advogado", "empresário", "programador", "designer",
"nadador", "corredor", "ciclista", "campeonato", "competição", "treinamento",
"velocidade", "equilíbrio", "concentração", "motivação", "disciplina",
"determinação", "persistência", "criatividade", "imaginação", "curiosidade",
"amizade", "felicidade", "esperança", "liberdade", "confiança", "coragem",
"gentileza", "respeito", "solidariedade", "harmonia", "tranquilidade",
"borboleta", "joaninha", "formigueiro", "abelha", "esquilo", "raposa",
"tamanduá", "capivara", "crocodilo", "camaleão", "pinguim", "avestruz",
"rinoceronte", "elefante", "hipopótamo", "orangotango", "gorila", "jaguatirica",
"maracujá", "melancia", "abacaxi", "morango", "framboesa", "amendoim",
"castanha", "macarrão", "hambúrguer", "chocolate", "sorvete", "pipoca",
"biscoito", "refrigerante", "vitamina", "suco", "laranjeira", "bananeira",
"girassol", "orquídea", "hortelã", "alecrim", "manjericão", "jabuticaba",
"pitangueira", "ipê", "eucalipto", "pinheiro", "mangueira", "coqueiro",
"computador", "internet", "teclado", "mouse", "monitor", "arquivo",
"mensagem", "telefone", "aplicativo", "conexão", "documento", "pesquisa",
"notificação", "configuração", "impressora", "carregador", "bluetooth",
"wireless", "processador", "memória", "servidor", "algoritmo", "javascript",
"python", "software", "hardware", "interface", "desenvolvimento",
"casa", "carro", "livro", "mesa", "cadeira", "janela", "porta", "parede",
"telefone", "computador", "teclado", "mouse", "tela", "papel", "caneta", "lápis",
"borracha", "caderno", "mochila", "sapato", "camisa", "calça", "vestido", "chapéu",
"relógio", "espelho", "chave", "carteira", "bolsa", "óculos", "cama", "travesseiro",
"cobertor", "toalha", "sabonete", "escova", "pasta", "copo", "prato", "garfo",
"faca", "colher", "panela", "fogão", "geladeira", "armário", "sofá", "televisão",
"controle", "lâmpada", "ventilador", "cortina", "tapete", "quintal", "jardim", "árvore",
"flor", "grama", "folha", "fruta", "banana", "maçã", "laranja", "uva",
"melancia", "manga", "abacaxi", "morango", "limão", "pêssego", "cereja", "pera",
"feijão", "arroz", "macarrão", "pão", "leite", "queijo", "manteiga", "ovo",
"carne", "peixe", "frango", "sopa", "salada", "açúcar", "sal", "óleo",
"café", "chá", "suco", "água", "vinho", "cerveja", "gelo", "escola",
"professor", "aluno", "lousa", "sala", "biblioteca", "laboratório", "pátio", "recreio",
"exame", "prova", "nota", "diploma", "trabalho", "escritório", "empresa", "reunião",
"cliente", "chefe", "salário", "emprego", "carreira", "projeto", "equipe", "documento",
"cidade", "bairro", "rua", "avenida", "praça", "parque", "hospital", "farmácia",
"mercado", "padaria", "banco", "correio", "shopping", "cinema", "teatro", "museu",
"igreja", "estádio", "praia", "montanha", "floresta", "rio", "lago", "mar",
"oceano", "ilha", "deserto", "vulcão", "estrela", "lua", "sol", "céu",
"nuvem", "chuva", "vento", "trovão", "relâmpago", "neve", "inverno", "verão",
"outono", "primavera", "manhã", "tarde", "noite", "meia-noite", "amanhecer", "entardecer",
"segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo", "janeiro",
"fevereiro", "março", "abril", "maio", "junho", "julho", "cachorro", "gato",
"pássaro", "peixinho", "cavalo", "vaca", "porco", "galinha", "pato", "coelho",
"tartaruga", "elefante", "leão", "tigre", "urso", "macaco", "cobra", "aranha",
"borboleta", "abelha", "formiga", "família", "mãe", "pai", "filho", "filha",
"irmão", "irmã", "avô", "avó", "tio", "tia", "primo", "prima",
"sobrinho", "amigo", "vizinho", "namorado", "namorada", "esposo", "esposa", "bebê",
"criança", "jovem", "idoso", "homem", "mulher", "pessoa", "gente", "povo",
"grupo", "música", "dança", "canção", "instrumento", "violão", "piano", "tambor",
"flauta", "guitarra", "bateria", "cantor", "banda", "show", "festa", "esporte",
"futebol", "basquete"
];

const elementos = {
  botoesTempo: Array.from(document.querySelectorAll('.btn-tempo')),
  painelTempo: document.querySelector('.painel-estatisticas .estatistica:nth-child(1) b'),
  painelWpm: document.querySelector('.painel-estatisticas .estatistica:nth-child(2) b'),
  painelPrecisao: document.querySelector('.painel-estatisticas .estatistica:nth-child(3) b'),
  textoDigitacao: document.querySelector('.texto-digitacao'),
  campoDigitacao: document.querySelector('.entrada-digitacao'),
  painelResultados: document.querySelector('.painel-resultados'),
  valorWpm: document.querySelector('.resultado-ppm .valor'),
  valorPrecisao: document.querySelector('.resultado-precisao .porcentagem'),
  detalhesResultados: document.querySelector('.detalhes-resultados'),
  botaoReiniciar: document.querySelector('.btn-reiniciar'),
  dica: document.querySelector('.dica')
};

const ALTURA_LINHA = 44;

const BUFFER_MINIMO_CARACTERES = 250;

const estado = {
  tempoSelecionado: 30,
  tempoRestante: 30,
  rodando: false,
  timer: null,
  textoDigitado: '',
  acertos: 0,
  erros: 0,
  concluido: false,
  inicio: null,
  historicoTextos: []
};

function gerarTextoComPalavras(quantidade = 50) {
  const palavrasSelecionadas = [];
  for (let i = 0; i < quantidade; i++) {
    const indice = Math.floor(Math.random() * palavras.length);
    palavrasSelecionadas.push(palavras[indice]);
  }
  return palavrasSelecionadas.join(' ');
}

function adicionarNovoTexto() {
  const novoTexto = gerarTextoComPalavras(50);
  estado.historicoTextos.push(novoTexto);
}

function obterTextoCompleto() {
  return estado.historicoTextos.join(' ').normalize('NFC');
}

function garantirTextoSuficiente(posicaoAtual) {
  while (obterTextoCompleto().length - posicaoAtual < BUFFER_MINIMO_CARACTERES) {
    adicionarNovoTexto();
  }
}

function renderizarTexto() {
  const textoCompleto = obterTextoCompleto();
  const chars = textoCompleto.split('');
  const textoDigitado = estado.textoDigitado;
  const posicaoAtual = textoDigitado.length;

  elementos.textoDigitacao.innerHTML = chars
    .map((caractere, indice) => {
      let classe = 'char';

      if (indice < textoDigitado.length) {
        classe += textoDigitado[indice] === caractere ? ' correct' : ' wrong';
      } else if (!estado.concluido && indice === posicaoAtual) {
        classe += ' current';
      }

      const conteudo = caractere === ' ' ? '&nbsp;' : caractere;
      return `<span class="${classe}">${conteudo}</span>`;
    })
    .join('');

  ajustarScroll(posicaoAtual, chars.length);
}

function ajustarScroll(posicaoAtual, totalChars) {
  const spans = elementos.textoDigitacao.children;
  if (totalChars === 0) return;

  const indiceAlvo = Math.min(posicaoAtual, totalChars - 1);
  const spanAlvo = spans[indiceAlvo];
  if (!spanAlvo) return;

  const linhaAtual = Math.round(spanAlvo.offsetTop / ALTURA_LINHA);
  const offsetY = Math.max(0, (linhaAtual - 1) * ALTURA_LINHA);

  elementos.textoDigitacao.style.transform = `translateY(-${offsetY}px)`;
}

function calcularEstatisticas() {
  let acertos = 0;
  let erros = 0;
  const textoDigitado = estado.textoDigitado;
  const textoCompleto = obterTextoCompleto();

  for (let i = 0; i < textoDigitado.length; i++) {
    if (i >= textoCompleto.length) {
      erros += 1;
      continue;
    }
    if (textoDigitado[i] === textoCompleto[i]) {
      acertos += 1;
    } else {
      erros += 1;
    }
  }

  estado.acertos = acertos;
  estado.erros = erros;
}

function atualizarPainel() {
  elementos.painelTempo.textContent = estado.tempoRestante;

  if (estado.textoDigitado.length === 0) {
    elementos.painelWpm.textContent = '0';
    elementos.painelPrecisao.textContent = '100%';
    return;
  }

  const segundosDecorridos = estado.tempoSelecionado - estado.tempoRestante;
  const minutosDecorridos = segundosDecorridos / 60;
  const wpm = minutosDecorridos > 0
    ? Math.round((estado.acertos / 5) / minutosDecorridos)
    : 0;
  const precisao = Math.round(
    (estado.acertos / Math.max(1, estado.textoDigitado.length)) * 100
  );

  elementos.painelWpm.textContent = wpm.toString();
  elementos.painelPrecisao.textContent = `${precisao}%`;
}

function iniciarTimer() {
  if (estado.rodando) return;
  estado.rodando = true;
  estado.inicio = Date.now();

  estado.timer = setInterval(() => {
    estado.tempoRestante -= 1;
    atualizarPainel();

    if (estado.tempoRestante <= 0) {
      finalizarJogo();
    }
  }, 1000);
}

function finalizarJogo() {
  clearInterval(estado.timer);
  estado.rodando = false;
  estado.concluido = true;

  const segundosDecorridos = estado.tempoSelecionado - Math.max(estado.tempoRestante, 0);
  const minutosDecorridos = segundosDecorridos / 60;
  const wpm = minutosDecorridos > 0
    ? Math.round((estado.acertos / 5) / minutosDecorridos)
    : 0;
  const precisao = estado.textoDigitado.length > 0
    ? Math.round((estado.acertos / estado.textoDigitado.length) * 100)
    : 100;

  elementos.painelResultados.classList.add('show');
  elementos.valorWpm.textContent = wpm;
  elementos.valorPrecisao.textContent = `${precisao}%`;

  const detalhes = elementos.detalhesResultados.querySelectorAll('b');
  detalhes[0].textContent = wpm;
  detalhes[1].textContent = estado.textoDigitado.length;
  detalhes[2].textContent = estado.erros;
  detalhes[3].textContent = `${segundosDecorridos}s`;

  elementos.campoDigitacao.disabled = true;
  elementos.dica.textContent = 'Jogo encerrado. Clique em Reiniciar para tentar outro texto.';
}

function reiniciarJogo() {
  clearInterval(estado.timer);
  estado.rodando = false;
  estado.concluido = false;
  estado.tempoRestante = estado.tempoSelecionado;
  estado.textoDigitado = '';
  estado.acertos = 0;
  estado.erros = 0;
  estado.inicio = null;
  estado.historicoTextos = [];

  elementos.campoDigitacao.value = '';
  elementos.campoDigitacao.disabled = false;
  elementos.painelResultados.classList.remove('show');
  elementos.dica.textContent = 'Digite o texto abaixo e tente atingir a melhor precisão.';

  adicionarNovoTexto();
  garantirTextoSuficiente(0);
  renderizarTexto();
  atualizarPainel();
  elementos.campoDigitacao.focus();
}

function selecionarTempo(segundos) {
  estado.tempoSelecionado = segundos;
  estado.tempoRestante = segundos;

  elementos.botoesTempo.forEach((botao) => {
    botao.classList.toggle('active', Number(botao.dataset.tempo) === segundos);
  });

  reiniciarJogo();
}

function iniciarDigito() {
  if (!estado.rodando && elementos.campoDigitacao.value.length > 0) {
    iniciarTimer();
  }

  estado.textoDigitado = elementos.campoDigitacao.value.normalize('NFC');
  garantirTextoSuficiente(estado.textoDigitado.length);

  calcularEstatisticas();
  renderizarTexto();
  atualizarPainel();
}

function configurarEventos() {
  elementos.botoesTempo.forEach((botao) => {
    botao.addEventListener('click', () => {
      selecionarTempo(Number(botao.dataset.tempo));
    });
  });

  elementos.campoDigitacao.addEventListener('input', iniciarDigito);
  elementos.botaoReiniciar.addEventListener('click', reiniciarJogo);

  document.querySelector('.campo-digitacao').addEventListener('click', () => {
    elementos.campoDigitacao.focus();
  });
}

function inicializar() {
  adicionarNovoTexto();
  garantirTextoSuficiente(0);
  renderizarTexto();
  atualizarPainel();
  configurarEventos();
  elementos.campoDigitacao.focus();
}

inicializar();

function desativarCorretorOrtografico() {
  const campo = elementos.campoDigitacao;
  campo.setAttribute('spellcheck', 'false');
  campo.spellcheck = false;


  campo.blur();
  requestAnimationFrame(() => {
    campo.focus();
  });
}

desativarCorretorOrtografico();
window.addEventListener('focus', desativarCorretorOrtografico);
