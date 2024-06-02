// Selecione todos os botões de alternância
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
