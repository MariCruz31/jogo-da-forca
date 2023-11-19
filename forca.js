let tentativas = 6;
let listaDinamica = [];
let nomePalavra;
let nomeCategoria;

const palavras = [
    palavras001 = {
      nome: "BRASIL",
      categoria: "PAÍSES"
    },
    palavra002 = {
      nome: "IRLANDA",
      categoria: "PAÍSES"
    },
    palavra003 = {
        nome: "VENEZUELA",
        categoria: "PAÍSES"
    },
    palavra004 = {
        nome: "PORTUGAL",
        categoria: "PAÍSES"
    },
    palavra005 = {
        nome: "LUXEMBURGO",
        categoria: "PAÍSES"
    },
    palavra006 = {
        nome: "ARGENTINA",
        categoria: "PAÍSES"
    },
    palavra007 = {
        nome: "ESPANHA",
        categoria: "PAÍSES"
    },
    palavra008 = {
        nome: "DINAMARCA",
        categoria: "PAÍSES"
    },
    palavra009 = {
        nome: "NORUEGA",
        categoria: "PAÍSES"
    },
    palavra010 = {
        nome: "HUNGRIA",
        categoria: "PAÍSES"
    },
    palavra011 = {
        nome: "ACEROLA",
        categoria: "FRUTAS"
    },
    palavra012 = {
        nome: "UVA",
        categoria: "FRUTAS"
    },
    palavra013 = {
        nome: "ABACAXI",
        categoria: "FRUTAS"
    },
    palavra014 = {
        nome: "TOMATE",
        categoria: "FRUTAS"
    },
    palavra015 = {
        nome: "MANGA",
        categoria: "FRUTAS"
    },
    palavra016 = {
        nome: "CARAMBOLA",
        categoria: "FRUTAS"
    },
    palavra017 = {
        nome: "KIWI",
        categoria: "FRUTAS"
    },
    palavra018 = {
        nome: "ABACATE",
        categoria: "FRUTAS"
    },
    palavra019 = {
        nome: "AMORA",
        categoria: "FRUTAS"
    },
    palavra020 = {
        nome: "CEREJA",
        categoria: "FRUTAS"
    },
    palavra021 = {
        nome: "FUTEBOL",
        categoria: "ESPORTE"
    },
    palavra022 = {
        nome: "BASQUETE",
        categoria: "ESPORTE"
    },
    palavra023 = {
        nome: "HANDEBOL",
        categoria: "ESPORTE"
    },
    palavra024 = {
        nome: "BEISEBOL",
        categoria: "ESPORTE"
    },
    palavra025 = {
        nome: "CAPOEIRA",
        categoria: "ESPORTE"
    },
    palavra026 = {
        nome: "GOLFE",
        categoria: "ESPORTE"
    },
    palavra027 = {
        nome: "HIPISMO",
        categoria: "ESPORTE"
    },
    palavra028 = {
        nome: "SURFE",
        categoria: "ESPORTE"
    },
    palavra029 = {
        nome: "RUGBY",
        categoria: "ESPORTE"
    },
    palavra030 = {
        nome: "REMO",
        categoria: "ESPORTE"
    },
];

criarPalavraSecreta()
function criarPalavraSecreta(){
  const indexPalavra = parseInt(Math.random() * palavras.length) // 

  nomePalavra = palavras[indexPalavra].nome;
  nomeCategoria = palavras[indexPalavra].categoria;

  console.log(nomePalavra)
  console.log(nomeCategoria)
};

montarNatela();
function montarNatela(){
  const palavraSecreta = document.querySelector("#palavra-secreta");
  palavraSecreta.innerHTML = "";

  const categoria = document. querySelector("#categoria");
  categoria.innerHTML = nomeCategoria;

  for(let i = 0; i < nomePalavra.length; i++){
    if(listaDinamica[i] == undefined){
      listaDinamica[i] = "&nbsp;"
      palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
    }else{
      palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
    }
  }
};

function verificaLetraClicada(letra){
    //Desabilita a tecla ou lotra
  document.getElementById("tecla-" + letra).disabled = true;
  if(tentativas > 0){
    mudaEstiloLetra("tecla-" + letra);
    compararListas(letra);
    montarNatela();
  }
};

function mudaEstiloLetra(tecla){
  document.getElementById(tecla).style.background = "#ff6000";
  document.getElementById(tecla).style.color = "#fffff";
};

function compararListas(letra){
  const posicao = nomePalavra.indexOf(letra)
  if(posicao < 0){
    tentativas --;
    //Aparecer Imagem
    buscarimages();

    if(tentativas == 0){ // Mensagem do modal quando não acertar a palavra certa!
      abreModal("OPS!","Suas chances acabaram...<br> A palavra secreta era <br>" + nomePalavra);
    }
  }
  else{
    for(let i = 0; i < nomePalavra.length; i++){
      if(nomePalavra[i] == letra){
        listaDinamica[i] = letra;
      }
    }
  }
  let vitoria = true;
  for (let i = 0; i < nomePalavra.length; i++) {
      if (nomePalavra[i] != listaDinamica[i]) {
          vitoria = false;
      }
  }
  if (vitoria == true) {
    abreModal("Parabéns", "Você descobriu a palavra <br> Clique no botão com o controle para carregar o jogo");
    tentativas = 0;
  }
};

function buscarimages() {
  switch (tentativas) {
    case 5:
        document.getElementById("images").style.background = "url('./images/hangman-1.svg')";
        break;
      case 4:
          document.getElementById("images").style.background = "url('./images/hangman-2.svg')";
          break;
      case 3:
          document.getElementById("images").style.background = "url('./images/hangman-3.svg')";
          break;
      case 2:
          document.getElementById("images").style.background = "url('./images/hangman-4.svg')";
          break;   
      case 1:
          document.getElementById("images").style.background = "url('./images/hangman-5.svg')";
          break;
      case 0:
          document.getElementById("images").style.background = "url('./images/hangman-6.svg')";
          break; 
      default:
          document.getElementById("images").style.background = "url('./images/hangman-0.svg')";
          break;
  }
};

// Modal quando não acertar a palavra certa!
function abreModal( titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  let modalMensagem = document.getElementById("modalBody");

  modalTitulo.innerText = titulo;
  modalMensagem.innerHTML = mensagem;

  $("#minhaModal").modal({
      show: true
  });
}

let botaoReiniciar = document.querySelector(".modal");

    botaoReiniciar.addEventListener("click", function(){
      location.reload();
})