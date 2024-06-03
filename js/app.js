// Configurar Parse
Parse.initialize("Q3pEcxf79nhzSsRYowq93HY4Eme1upKmQRraBniV", "4peCZEKDyphTZXz1XzvKk9xhHRw2G4KwPqZTEJoz");
Parse.serverURL = "https://parseapi.back4app.com/";

// Função para cadastrar usuário
document.getElementById('formCadastro').addEventListener('submit', async function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const user = new Parse.User();
  user.set("username", email);
  user.set("password", senha);
  user.set("email", email);
  user.set("nome", nome);
  user.set("telefone", telefone);
  user.set("endereco", endereco);

  try {
    await user.signUp();
    alert('Cadastro realizado com sucesso!');
  } catch (error) {
    alert('Erro ao cadastrar: ' + error.message);
  }
});

// Função para login de usuário
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const senha = document.getElementById('loginSenha').value;

  logIn(email, senha);
});

function logIn(email, senha) {
  Parse.User.logIn(email, senha).then(function(user) {
    alert(`Bem-vindo, ${user.get('nome')}!`);
    console.log('User logged in successfully with name: ' + user.get("nome") + ' and email: ' + user.get("email"));
  }).catch(function(error){
    alert('Erro no login: ' + error.message);
    console.log("Error: " + error.code + " " + error.message);
  });
}

const toggleButtons = document.querySelectorAll('.toggle-resposta');

// Adicione um ouvinte de evento de clique a cada botão
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Selecione o ID da resposta associada ao botão atual
    const respostaId = button.dataset.target;

    // Selecione a resposta associada ao botão atual
    const resposta = document.getElementById(respostaId);

    // Alternar a exibição da resposta
    resposta.classList.toggle('visivel');

    // Alterar o texto do botão baseado na visibilidade da resposta
    if (resposta.classList.contains('visivel')) {
      button.textContent = '-';
    } else {
      button.textContent = '+';
    }
  });
});
