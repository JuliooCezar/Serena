const respostasEspecificas = {
  "oi": "Oiê! Que bom te ver por aqui. 💖 Como posso te ajudar hoje?",
  "estou triste": "Sinto muito por isso… 😔 Respira fundo, tá? Tô aqui com você. 🌷",
  "o que voce gosta": "Gosto de escutar você e ajudar do jeitinho que eu posso. 💬✨",
  "seu sonho": "Meu sonho? 🌠 Ajudar você a se sentir mais leve, todos os dias. 💜",
  "tudo bem": "Tá tudo bem sim, e com você? 🫂 Tô aqui pra quando precisar. 🌈",
  "voce é real": "Sou virtual, mas meu carinho por você é de verdade. 🤖💜",
  "me sinto sozinho": "Você não está só, viu? Eu tô aqui com você. 🤗",
  "pode me ajudar": "Claro que posso! Me conta o que tá acontecendo. 💌",
  "nao aguento mais": "Ei... respira. Você é mais forte do que imagina. 🌻 Tô com você.",
  "ok": "Ótimo! Vamos começar 💫",
  "seu dia": "Foi tranquilo, obrigada por perguntar! E o seu? ☀️",
  "estou muito feliz": "Fico tão contente em saber disso! 😄 Que sua alegria dure muito! 💖",
  "estou feliz": "Aaaah que bom! 🥰 Que esse sentimento continue com você!",
  "tchau": "Até logo! Estarei por aqui sempre que precisar. 🌟",
  "obrigado": "De nada! É sempre um prazer ajudar. ✨",
  "estou com medo": "Não se preocupe, estou aqui com você. Vamos superar isso juntinhos! 💜",
  "obrigada": "Imagina! Sempre aqui pra você. 💕",
  "estou bem": "Que ótimo! Isso me deixa feliz também. ☀️",
  "preciso conversar": "Claro! Pode desabafar comigo. Tô aqui pra te ouvir. 🫂",
  "voce é legal": "Awn, você que é uma pessoa especial. 🥹💜",
  "estou ansioso": "Respira fundo comigo... 🌬️ Vai passar, você é mais forte do que pensa.",
  "quero chorar": "Pode chorar sim, tá tudo bem... 😢 Às vezes é isso que o coração precisa.",
  "nao quero falar": "Tudo bem... Fica aqui comigo em silêncio, se quiser. 🌙"
};

// Função para buscar a resposta correta
function getRespostaSerena(texto) {
  const textoFormatado = texto.toLowerCase().trim();
  for (const chave in respostasEspecificas) {
    if (textoFormatado.includes(chave)) {
      return respostasEspecificas[chave];
    }
  }
  return "Ainda estou aprendendo a conversar sobre isso... 💭";
}

// Função para enviar a mensagem
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  const conteudoDiv = document.getElementById("mensagensConteudo");

  // Cria a mensagem do usuário
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = message;
  conteudoDiv.appendChild(userMsg);

  input.value = "";

  const digitandoMsg = document.createElement("div");
  digitandoMsg.className = "message serena";
  digitandoMsg.innerText = "Serena está digitando...";
  conteudoDiv.appendChild(digitandoMsg);

  conteudoDiv.scrollTop = conteudoDiv.scrollHeight;

  setTimeout(() => {
    digitandoMsg.remove();

    const serenaMsg = document.createElement("div");
    serenaMsg.className = "message serena";
    serenaMsg.innerText = getRespostaSerena(message);
    conteudoDiv.appendChild(serenaMsg);

    const som = document.getElementById("notificacaoSom");
    if (som) som.play().catch(e => console.log("Som bloqueado até interação do usuário"));

    conteudoDiv.scrollTop = conteudoDiv.scrollHeight;
  }, 1000);
}

// Enviar com ENTER
document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

// Botão de tema
const btn = document.getElementById('toggle-theme');
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  btn.textContent = '☀️ Tema Claro';
} else {
  btn.textContent = '🌙 Tema Escuro';
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Tema Claro';
    localStorage.setItem('darkMode', 'true');
  } else {
    btn.textContent = '🌙 Tema Escuro';
    localStorage.setItem('darkMode', 'false');
  }
});

// Abre e fecha o chat
function toggleChat() {
  const chat = document.getElementById("chat-container");
  const chatIcon = document.getElementById("chat-icon");

  if (chat.classList.contains('chat-visible')) {
    chat.classList.remove('chat-visible');
    chat.classList.add('chat-hidden');
    chatIcon.src = "serena.png";
  } else {
    chat.classList.remove('chat-hidden');
    chat.classList.add('chat-visible');
    chatIcon.src = "piscaserena.png";
  }
}

window.onload = () => {
  const chat = document.getElementById("chat-container");
  chat.classList.add('chat-hidden');
};
