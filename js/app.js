// Configurar Parse
Parse.initialize("Q3pEcxf79nhzSsRYowq93HY4Eme1upKmQRraBniV", "4peCZEKDyphTZXz1XzvKk9xhHRw2G4KwPqZTEJoz");
Parse.serverURL = "https://parseapi.back4app.com/";

// Função para cadastrar usuário
document.addEventListener('DOMContentLoaded', (event) => {
  const formCadastro = document.getElementById('formCadastro');
  if (formCadastro) {
    formCadastro.addEventListener('submit', async function(event) {
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
        formCadastro.reset(); // Limpar os campos do formulário
        window.location.href = 'login.html'; // Redirecionar para a página de login
      } catch (error) {
        alert('Erro ao cadastrar: ' + error.message);
      }
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const senha = document.getElementById('loginSenha').value;

      try {
        const user = await Parse.User.logIn(email, senha);
        alert(`Bem-vindo, ${user.get('nome')}!`);
        loginForm.reset(); // Limpar os campos do formulário
        window.location.href = 'index.html'; // Redirecionar para a página inicial
      } catch (error) {
        alert('Erro no login: ' + error.message);
      }
    });
  }
});

